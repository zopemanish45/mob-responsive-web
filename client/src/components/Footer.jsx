import React from 'react';
import { Container } from 'react-bootstrap';
import "../assets/Footer.css"
function Footer() {
  return (
    <footer className="bg-dark text-light  py-3 w-[100vw] p-20">
      <div className='navigation'>
        <div className='navdata'>
          <div>About Us</div>
          <div>Our Services</div>
          <div>Careers</div>
          <div>Refund Policy</div>
          <div>Became A parterner</div>
          <div>terms and condition</div>
          <div>Faq</div>
        </div>
      </div>
      <div className='footer'>
        <div className='destination'>
          <h2>Mbbs Destination</h2>
          <div className='desti'>
          <p>Study MBBS in Russia</p>
          <p>Study MBBS in Belarus</p>
          <p>Study MBBS in Georgia</p>
          
          </div>
          
        </div>
        <div className='destination'>
          <h2>Quick Link</h2>
          <div className='desti'>
          <p>MBA</p>
          <p>MBBS</p>
          <p>Study Abroad</p>
          
          </div>
          
        </div>
        <div className='destination'>
          <h2>References</h2>
          <div className='desti'>
          <p>NMC</p>
          <p>NBE</p>
          <p>NEET</p>
          
          </div>
          
        </div>
        <div>
          <div>
            <img src="src\assets\partner\logo-white.png" alt="" />
          </div>
          <div>
            <p><span className='comm'></span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
