import React from 'react'
import './Hero.css';
import Logo from './Logo'
import Roll from 'react-reveal/Roll'
import Fade from 'react-reveal/Fade';
export default function Hero() {
    return (
        <div className="flex justify-around items-center m-auto uppercase transform scale-75 md:scale-100  py-4">
            <div className="z-10">
                  <Fade left cascade>
                <h1 className="text-9xl text-right font-bold" id="hero-name">
                    Hanan<br />
                    <span className="text-8xl right-0">
                        Hakami
                    </span></h1>
                <h3 className="text-3xl md:ml-0 ml-4">Web Developer</h3>
                </Fade>
            </div>
            <div className="z-0 md:-ml-80 -ml-24">
                <Roll left>
                    <Logo />
                </Roll>
            </div>
        </div>
    )
}
