import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


function LandingPage(){
    return (
        <div className='Landing'>
              <Link to="/home">
              <button className='btn'>Start</button>
              </Link>
          </div>           
    )
}

export default LandingPage;