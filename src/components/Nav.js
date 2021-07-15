import React from 'react'
export default function Nav() {
    return (
        <div className="uppercase border-b border-black flex  px-2 fixed w-full z-50 bg-white">
            <div className="border-r border-black px-2 pr-4">
                <svg width="47" height="54" viewBox="0 0 211 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H66.4259V197.438H34L0 166.5V0Z" fill="black" />
                    <path d="M72.287 0H105.5L136.213 30L138.713 261.472H105.5L72.287 233V0Z" fill="black" />
                    <path d="M144.574 64.034H172L211 98.5V261.472H144.574V64.034Z" fill="black" />
                    <path d="M1.9537 120.953V76.4851H130.898V120.953H1.9537Z" fill="black" />
                    <path d="M80.1019 184.987V140.519H183.648V184.987H80.1019Z" fill="black" />
                </svg>
            </div>
            <div className="border-r border-black pt-4 md:px-16 px-11 hover:bg-black hover:text-white">
                <a href="#projects">Projects</a>
            </div>
            <div className="border-r border-black pt-4 md:px-16 px-11 hover:bg-black hover:text-white">
                <a target="_blank" href="https://drive.google.com/file/d/1ngH8Er24899_dn7zuVTlGBgnTxygrb8G/view">Resume</a>
            </div>
        </div>
    )
}
