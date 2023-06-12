import "./HeroImgStyles.css";

import React from 'react';

import IntoImg from "../assets/arian-darvishi-wh-RPfR_3_M-unsplash.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntoImg"/>

        </div>
        <div className="content">
            <p>Hi, I'M A FULL STACK DEVELOPER</p>
            <h1>Java Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
      
    </div>
  )
}

export default HeroImg
