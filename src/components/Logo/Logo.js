import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-2 center" option={{max : 55}} style={{height: 120, width: 120}}>
                <div className="Tilt-inner pa3 ">
                    <img alt="logo" src={brain} style={{height: 60, width: 60, margin: '30px'}}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
