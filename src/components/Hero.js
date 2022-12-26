import React from 'react';
import image1 from "../images/banner-right-image.svg";;

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image1} alt="homepageImage"/>
    <div>
      <h1 className="text-5xl font-bold">Achieve The <span style={{color: "#ffa500"}}>Scores</span> You <span style={{color: "#db2877"}}>Deserve</span> With Community</h1>
      <p className="py-6">Prodat is an online education platform built by former IGCSE students with the aim of providing a supportive community to help other students alike to get through their IGCSE journey effortlessly.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
