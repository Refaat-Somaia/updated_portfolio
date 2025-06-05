import { React, useRef, useEffect, useState } from 'react'
import profileIcon from '../assets/images/profile-svgrepo-com.svg'
import blob from '../assets/images/blob.png'

function Profile() {
    const profileRef = useRef(null);
    const [anim, setAnime] = useState();


    useEffect(() => {
        // let e = document.getElementsByClassName("skills-bar")[0].children

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (window.screen.width >= 600)
                        setAnime("motion-preset-expand opacity-100")

                }

            },
            {
                root: null, // viewport
                rootMargin: '0px', // no margin
                threshold: 0.4, // 50% of target visible
            }
        );

        if (profileRef.current) {
            observer.observe(profileRef.current);

        }

        // Clean up the observer
        return () => {
            if (profileRef.current) {
                observer.unobserve(profileRef.current);
            }

        };
    },
        []);
    return (
        <div ref={profileRef} id='profile' className='my-8  h-[35rem] py-8 flex w-full flex-col justify-center  items-center motion-preset-expand md:my-0'>

            <div className={`w-11/12 md:w-3/6 h-3/4 opacity-${(window.screen.width >= 600) ? "0" : "1"} flex-col-reverse flex md:flex-row justify-between items-center ${anim}`} >

                <div className='w-[90%] md:w-[60%]  h-full flex flex-col justify-center items-center'>
                    <div className="h-12 md:h-0"></div>

                    <h1 className='text-text text-3xl font-bold text-start mb-2'>Profile</h1>
                    <p className='text-text text-xl'>Software Developer with a Bachelor's degree
                        in Software Engineering and 2+ years of experience
                        in frontend web development and mobile application development using Flutter.
                        Skilled in software development fundamentals and best practices, with a passion for continuously learning new technologies
                        and solving challenging problems.</p>

                </div>


                <div className='w-[30%] h-full flex flex-col justify-center items-center '>
                    <img src={profileIcon} alt="" />

                    <img className='w-[35%]  absolute md:w-[40%] drop-shadow-md  shadow-primary' src={blob} alt="" />
                </div>





            </div>


        </div>
    )
}

export default Profile
