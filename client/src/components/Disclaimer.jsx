import React from 'react';
import "../assets/Disclaimer.css";

function Disclaimer() {
  return (
    <>
      <div className='stat'>
        <div className='flexible'>
          <div>
            <h3>Want To know more about studying MBBS Abroad?</h3>
            <h3>Download Our Broucher</h3>
          </div>
          <div className='amit'>
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='Mobile No'/>
            <input type="text" placeholder='Email'/>
            <button>Download Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Disclaimer;
