import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './assets/components/NavBar'; 
import Home from './home/Home';
import SignUp from "./assets/components/SignUp";
import LoginPage from './assets/components/LoginPage';
import Profile from './assets/components/Profile';
import Message from './assets/components/Message';
import Matching from './assets/components/Matching';
import Events from './assets/components/Events';
import Resources from './assets/components/Resources';
import Notification from './assets/components/Notification';
import Dashboard from './assets/components/Dashboard';
import Progress from './assets/components/Progress';
import Help from './assets/components/Help';
import Privacy from './assets/components/Privacy';
import Ebboks from './assets/components/Ebboks.jsx';
import Jobs from './assets/components/Jobs.jsx';
import Networking from './assets/components/Networking.jsx';
import Interview from './assets/components/Interview.jsx';
import FAQs from './assets/components/FAQs.jsx';
import About from './assets/components/About.jsx';
import Contact from './assets/components/Contact.jsx';
import Search from './assets/components/Search.jsx';

function App() {
  const handleSuccessfulLogin = () => {
    console.log("Login successful! Closing modal and navigating to home...");
    setShowLogin(false);
    navigate("/");  
  };
  
  return (
    <>
      
      <NavBar /> 

      <div className="dark:bg-slate-900 dark:text-white pt-16">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage onLoginSuccess={handleSuccessfulLogin} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Ebboks" element={<Ebboks />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/career" element={<Interview />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
