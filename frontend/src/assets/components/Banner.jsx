import React from 'react';


function Banner() {
  return (
    <>
    <div>
    <div className="carousel w-full mt-20"> 
  <div id="slide1" className="carousel-item relative w-full">
  
  <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner5.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex m-32 text-white ">
    <h1 className="text-6xl font-bold"><span className='text-peach-500'>Welcome to <br></br></span><span className="text-pink-500">GuidingStar</span></h1>
    <p className="text-xl mb-4 ml-64 " >Find mentors who can offer industry insights, career advice, and guidance on your professional journey.<br></br><br></br><br></br>
   <span className=" text-violet-500 text-4xl ">Start your journey now!</span></p>
  </div>
</div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className='bg-cover bg-center relative w-full' style={{ backgroundImage: "url('/images/banners.jpeg')"}}>
 
  <div className='absolute inset-0 flex m-40 text-white'>
    <h1 className='text-5xl font-bold text-violet-700'>When you teach,<br></br> you learn.</h1>
  </div>
  </div>
  
  

      
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className='bg-cover bg-center relative w-full' style={{ backgroundImage: "url('/images/banner20.jpg')"}}>
 
 <div className='absolute inset-0 flex m-40 text-white'>
   <h1 className='text-3xl font-bold text-violet-700'>Sign up today to connect with mentors, learn from their experiences, and advance your career goals.</h1>
 </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div>



        </div></>
  );
}

export default Banner;
