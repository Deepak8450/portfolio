import React from 'react'
import "./Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-heading'>
            <h2>Contact Information</h2>
            <p>Have a Question? Contact me.</p>
        </div>
      <ul>
        <li><a href='www.linkedin.com/in/deepak-sen-8a0a09253'><i class="fa-brands fa-linkedin"></i></a>linkedin</li>
        <li><a href='https://wa.me/8450847565'><i class="fa-brands fa-square-whatsapp"></i></a>Whatsapp</li>
        <li><a href='https://www.youtube.com/@deepaksen1568'><i class="fa-brands fa-youtube"></i></a>YouTube</li>
        <li><a href='https://github.com/Deepak8450/'><i class="fa-brands fa-github"></i></a>Git-hub</li>
      </ul>
    </div>
  )
}
