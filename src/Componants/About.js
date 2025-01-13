import React from "react";
import profile from "./pofile3.jpeg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Footer from "./Footer";

export default function About() {
  return (
<main>
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded-full" alt="hero" src={profile} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Crafting Interactive & Engaging
        <br classNameName="hidden lg:inline-block" />Web Experiences
      </h1>
      <p className="mb-8 leading-relaxed"><b>Hi, I’m Deepak! </b>
      A passionate Frontend Developer dedicated to turning ideas into stunning and functional websites. I specialize in creating responsive, user-friendly designs with a focus on performance and aesthetics.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/projects">Go to projects</Link></button>
      </div>
    </div>
  </div>
</section><hr></hr>
<Footer/>
</main>
    // <main>
    //   <div classNameName="about-page">
    //     <h1>About me</h1>
    //     <div classNameName="profile-info">
    //       <div classNameName="about-container">
    //         <img src={profile} id="profileImg" />
    //       </div>
    //       <div classNameName="intro">
    //         <p>
    //           Hi, <h2>I'm Deepak Sen</h2>, a passionate and detail-oriented{" "}
    //           <h2>Frontend Developer</h2> with a knack for creating visually
    //           stunning, responsive, and user-friendly web interfaces. I love
    //           turning ideas into reality through clean an exceptional user
    //           experience.<br></br>
    //           <br></br> With a strong foundation in HTML5, CSS3, JavaScript and
    //           React.js, I specialize in building modern, dynamic, and
    //           interactive web applications. I believe in continuous learning and
    //           styling updated with the latest technology.
    //         </p>
    //       </div>
    //       <div classNameName="resume">
    //         <h2>My Resume</h2>
    //         <iframe src={Resume} frameborder="0" />
    //       </div>
    //     </div>
    //   </div>
      
    //   <Footer />
    // </main>
  );
}
