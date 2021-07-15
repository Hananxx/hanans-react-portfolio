import React from 'react'
import '../index.css'
import Fade from 'react-reveal/Fade';
export default function Projects() {
    return (
        <div className="py-8" id="projects">
            <div className="flex lg:flex-row flex-col justify-between my-12 w-11/12 m-auto">
                <div className="self-center mb-6 text-left">
                    <Fade left cascade>
                        <h3 className="text-xl">.01</h3>
                        <h1 className="text-3xl font-bold">Memes Maker</h1>
                        <p className="text-xl mb-2 mx-4 text-gray-800 font-light">React.js responsive web application where users can create and post memes, also they can browse others memes and edit or delete them.</p>
                        <div className="flex justify-evenly lg:w-1/2 m-auto my-4 text-md">
                            <span className="language">Reactjs</span>
                            <span className="language">Javascript</span>
                            <span className="language">Tailwindcss</span>
                            <span className="language">Firestore</span>
                        </div>
                        <div className="text-center hover:text-pink-500 uppercase font-semibold">
                            <a target="_blank" href="https://github.com/Hananxx/Memes-Maker">View Repo</a>
                        </div>
                    </Fade>
                </div>
                <img className="shadow-lg h-1/4" src="https://github.com/hanan-tuwaiq/FinalProject/raw/main/demo.gif" />
            </div>
            <hr className="border-black" />
            {/* 2 */}
            <div className="flex lg:flex-row flex-col justify-between my-12 w-11/12 m-auto">
                <div className="self-center mb-6 text-left">
                    <Fade left cascade>
                        <h3 className="text-xl">.02</h3>
                        <h1 className="text-3xl font-bold">Circus Shows & Tickets</h1>
                        <p className="text-xl mb-2 mx-4 text-gray-800 font-light">
                            Website to display and book upcoming circus shows, users can sign up whenever they need to book a ticket or display their booked tickets.
                        </p>
                        <div className="flex justify-evenly lg:w-1/2 m-auto my-4 text-md">
                            <span className="language">ASP.NET</span>
                            <span className="language">MSSQL</span>
                            <span className="language">Tailwindcss</span>
                            <span className="language">Razor</span>
                        </div>
                        <div className="text-center hover:text-pink-500 uppercase font-semibold">
                            <a target="_blank" href="https://github.com/Hananxx/Circus-shows-tickets">View Repo</a>
                        </div>
                    </Fade>
                </div>
                <img className="shadow-lg h-1/4" src="https://github.com/hanan-tuwaiq/Project04_Auth_CRUD_ASP.NET/raw/main/demo.gif" />
            </div>
            <hr className="border-black" />
            {/* 3 */}
            <div className="flex lg:flex-row flex-col justify-between my-12 w-11/12 m-auto">
                <div className="self-center mb-6 text-left">
                    <Fade left cascade>
                        <h3 className="text-xl">.03</h3>
                        <h1 className="text-3xl font-bold">True Crime blog</h1>
                        <p className="text-xl mb-2 mx-4 text-gray-800 font-light">
                        Website lets you create, edit, delete and comment on articles about true crime.

                        </p>
                        <div className="flex justify-evenly lg:w-1/2 m-auto my-4 text-md">
                            <span className="language">ASP.NET</span>
                            <span className="language">MSSQL</span>
                            <span className="language">Tailwindcss</span>
                            <span className="language">Razor</span>
                        </div>
                        <div className="text-center hover:text-pink-500 uppercase font-semibold">
                            <a target="_blank" href="https://github.com/Hananxx/True-Crime-blog">View Repo</a>
                        </div>
                    </Fade>
                </div>
                <img className="shadow-lg h-1/4" src="https://github.com/hanan-tuwaiq/Project03_CRUD_With_ASP.NET_MVC/raw/main/demo.gif?raw=true" />
            </div>
        </div>
    )
}
