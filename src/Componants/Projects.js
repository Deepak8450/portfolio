import React from 'react'
import "./Project.css";
import ProjectImg1 from "./Screenshot (16).png";
import Footer from './Footer';


export default function Projects() {
  return (
<main>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-xl mb-2 text-white">Daily Mandi: Revolutionizing Food & Grain Delivery</h1>
        <div className="leading-relaxed">Daily Mandi is an innovative e-commerce platform designed to simplify the way food and grains are delivered. Our platform connects local farmers, vendors, and consumers, ensuring fresh and high-quality products reach your doorstep efficiently.<a href='https://deepak8450.github.io/DailyMondyRepo/' className='text-[#f0b802]'>Visit Website</a></div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-white">2.7K</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-white">1.8K</h2>
        <p className="leading-relaxed">Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-white">35</h2>
        <p className="leading-relaxed">Supporters</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-white">4</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img className="object-cover object-center w-full h-full" src={ProjectImg1} alt="stats"/>
    </div>
  </div>
</section>
<hr></hr>
<Footer/>
</main>

    // <div classNameName='Project'>
    //   <h1>Projects</h1>
    //   <div classNameName='project-container'>
    //     <div classNameName='projectImg'>
    //        <img src={ProjectImg1} classNameName='projectImg' />
    //        <img src={ProjectImg2} classNameName='projectImg' />
    //     </div>
    //     <div classNameName='project-description'>
    //      <p>DailyMandi is an online platform designed for the seamless buying and selling of vegetables and grains. it connects farmers, wholesalers, and consumers, providing a digital marketplace to ensure fresh produce and grains reach buyers effciently.<br></br><a href='https://deepak8450.github.io/DailyMondyRepo/'>Visit Website</a></p>
    //     </div>
    //   </div>
    // </div>
  )
}
