import React from 'react'
import circleLeft from '../assets/images/circle-left.png'
import flutter from "../assets/images/flutter.svg"
import html from "../assets/images/html.png"
import js from "../assets/images/js.png"
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from "../assets/images/css.svg"
import react from "../assets/images/react.png"
import firebase from "../assets/images/firebase.svg"
import uiux from "../assets/images/ui-ux.png"
import sql from "../assets/images/sql.png"
import tailwind from "../assets/images/tailwind.png"
import api from "../assets/images/api.png"
import socketIo from "../assets/images/Socket-io.png"
import circleRight from '../assets/images/circle-right.png'
import figma from "../assets/images/figma.png"
function Skills() {
    return (
        <div id='skills' className='my-8 w-full relative h-[38rem] flex flex-col justify-center items-center md:my-0'>
            <h1 className='text-text font-bold text-3xl'>My skills <span> </span>
                <FontAwesomeIcon className='text-4xl ml-2' icon={faPuzzlePiece} />
            </h1>
            <div className="h-10"></div>
            <img src={circleLeft} className='hidden md:block absolute left-0 top-48 h-3/4' alt="" />
            <img src={circleRight} className='hidden md:block absolute top-0 right-0 h-2/5' alt="" />

            <div className=' grid grid-cols-3 gap-2  md:grid-cols-4 md:gap-4'>
                {[
                    { src: flutter, name: 'Flutter' },
                    { src: react, name: 'React' },
                    { src: js, name: 'JavaScript' },
                    { src: html, name: 'HTML' },
                    { src: tailwind, name: 'Tailwind CSS' },
                    { src: css, name: 'CSS' },
                    { src: firebase, name: 'Firebase' },
                    { src: api, name: 'REST APIs' },
                    { src: sql, name: 'SQL' },
                    { src: socketIo, name: 'Socket.IO' },
                    { src: uiux, name: 'UI/UX' },
                    { src: figma, name: 'Figma' },
                ].map((tech, index) => (
                    <div
                        key={index}
                        className="flip-card m-2 w-28 h-28 perspective"
                    >
                        <div className="flip-card-inner w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
                            <div className="flip-card-front bg-slate-900 flex justify-center items-center rounded-lg p-4 backface-hidden">
                                <img className="h-14 " src={tech.src} alt={tech.name} />
                            </div>
                            <div className="flip-card-back bg-slate-800 text-white flex justify-center items-center rounded-lg p-4 backface-hidden transform rotate-y-180">
                                <span className="text-center font-semibold">{tech.name}</span>
                            </div>
                        </div>
                    </div>
                ))}


            </div>


        </div>
    )
}

export default Skills
