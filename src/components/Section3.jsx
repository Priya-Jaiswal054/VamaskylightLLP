import React from 'react'
import "../style/section3.css";
import { useNavigate } from 'react-router-dom';

export default function Section3() {
  const navigate = useNavigate();
  return (
    <div className='sec3-outer'>
      <div className='sec3-inner'>
        <h5>Have any query ?</h5>
        <h1>VAMA Skylight Support and Services</h1>
        <p>Have any question related to VAMA Support and services or Vama Store; Reach out to us from contact page and we will get back to you shortly</p>
        <button onClick={()=>{
          navigate("/contact")
        }}>GET STARTED</button>
      </div>
    </div>
  )
}
