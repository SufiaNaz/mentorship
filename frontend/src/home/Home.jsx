import React from 'react';
import NavBar from '../assets/components/NavBar';
import Banner from '../assets/components/Banner';
import Register from '../assets/components/Register';
import Features from '../assets/components/Features';
import Bottom from '../assets/components/Bottom';
import ImageGallery from '../assets/components/ImageGallery';
import Footer from '../assets/components/Footer';

function Home() {
  return (
   <>
   <Banner />
   <Register />
   <Features />
   <Bottom />
   <ImageGallery />
   <Footer />
  
   </>
  );
}

export default Home;
