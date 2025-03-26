import React, { useState, useEffect, useRef } from "react";
import { Camera, Send, Image, Video, Phone, Sun, Moon } from "lucide-react";
import { db } from "./Firebase"; 
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  let peerConnection;

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const sendMessage = async () => {
    if (text.trim()) {
      await addDoc(collection(db, "messages"), {
        text,
        sender: "John Doe",
        timestamp: new Date(),
      });
      setText("");
    }
  };

  const startVideoCall = async () => {
    setCallActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;
      peerConnection = new RTCPeerConnection();
      stream.getTracks().forEach((track) => peerConnection.addTrack(track, stream));
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      <button className="absolute top-6 right-6 p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
      </button>

      <div className="w-full max-w-2xl p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-xl font-bold text-center">Student-Alumni Chat</h2>
        
        <div className="h-80 overflow-y-auto p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
          {messages.map((msg) => (
            <div key={msg.id} className={`p-2 my-2 rounded-lg ${msg.sender === "John Doe" ? "bg-blue-500 text-white self-end" : "bg-gray-300"}`}>
              <strong>{msg.sender}</strong>: {msg.text}
            </div>
          ))}
        </div>

        
        <div className="flex items-center mt-4">
          <input type="text" className="flex-1 p-2 border rounded-l-lg dark:bg-gray-600" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." />
          <button className="p-2 bg-blue-500 text-white rounded-r-lg" onClick={sendMessage}>
            <Send />
          </button>
        </div>

        
        <div className="mt-4 flex justify-between">
          <button className="p-2 bg-green-500 text-white rounded-lg flex items-center" onClick={startVideoCall}>
            <Phone className="mr-2" /> Start Call
          </button>
          <button className="p-2 bg-purple-500 text-white rounded-lg">
            <Image className="mr-2" /> Send Image
          </button>
          <button className="p-2 bg-red-500 text-white rounded-lg">
            <Video className="mr-2" /> Send Video
          </button>
        </div>
      </div>

      {callActive && (
        <div className="fixed top-20 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-3/4 p-6 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Video Call with Alumni</h2>
            <div className="flex space-x-4">
              <video ref={localVideoRef} autoPlay className="w-1/2 rounded-lg border" />
              <video ref={remoteVideoRef} autoPlay className="w-1/2 rounded-lg border" />
            </div>
            <button className="mt-4 p-2 bg-red-500 text-white rounded-lg" onClick={() => setCallActive(false)}>End Call</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
