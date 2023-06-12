import React from 'react'
import Navbar from '../components/Navbar';
import Heroimg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <h2>
        <Navbar />
        <Heroimg />
        <Footer/>
      </h2>
    </div>
  )
}

export default Home
