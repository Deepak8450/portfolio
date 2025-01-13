import React from 'react'
import "./Footer.css";
import logo from "./pofile3.jpeg";

export default function Footer() {
  return (

<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
     <img src={logo} className='w-6 h-6 rounded-full' />
      <span className="ml-3 text-xl">Web-Developer</span>
    </a>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 learning skills —
      <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@portfolio</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a href='https://github.com/Deepak8450/' className='m-2'><i className="fa-brands fa-github"></i></a>
      <a href='https://www.youtube.com/@deepaksen1568'  className='m-2'><i className="fa-brands fa-youtube"></i></a>
      <a href='https://wa.me/8450847565'  className='m-2'><i className="fa-brands fa-square-whatsapp"></i></a>
      <a href='www.linkedin.com/in/deepak-sen-8a0a09253'  className='m-2'><i className="fa-brands fa-linkedin"></i></a>
    </span>
  </div>
</footer>

    // <div classNameName='footer'>
    //     <div classNameName='footer-heading'>
    //         <h2>Contact Information</h2>
    //         <p>Have a Question? Contact me.</p>
    //     </div>
    //   <ul>
    //     <li><a href='www.linkedin.com/in/deepak-sen-8a0a09253'><i className="fa-brands fa-linkedin"></i></a>linkedin</li>
    //     <li><a href='https://wa.me/8450847565'><i className="fa-brands fa-square-whatsapp"></i></a>Whatsapp</li>
    //     <li><a href='https://www.youtube.com/@deepaksen1568'><i className="fa-brands fa-youtube"></i></a>YouTube</li>
    //     <li><a href='https://github.com/Deepak8450/'><i className="fa-brands fa-github"></i></a>Git-hub</li>
    //   </ul>
    // </div>
  )
}
