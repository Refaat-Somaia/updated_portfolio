import { useState, useRef, useEffect } from 'react'
import img from '../assets/images/contact.svg'
import whatsapp from '../assets/images/whatsapp-128-svgrepo-com.png'
import linkedIn from '../assets/images/linkedin-svgrepo-com.png'
import resume from "../assets/Refaat Somaia CV.pdf"
import gmail from "../assets/images/mail-svgrepo-com.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
function Contact() {
    const [anim, setAnime] = useState();
    const contactRef = useRef(null);

    useEffect(() => {
        let e = document.getElementsByClassName("contact-list")[0].children

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {

                    (window.innerWidth) < 1380 ? setAnime("img-slide-small 0.5s forwards")
                        : setAnime("img-slide-big 1s forwards")

                    setTimeout(function () {

                        for (let i = 0; i < e.length; i++) {

                            e[i].style.animation = `fade-in-square 0.5s forwards ${200 + (i * 200)}ms`
                        }
                    }, 500)
                }

            },
            {
                root: null, // viewport
                rootMargin: '0px', // no margin
                threshold: 0.4, // 50% of target visible
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);

        }

        // Clean up the observer
        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }

        };
    },
        []);

    return (
        <div ref={contactRef} className='contact-container' id='contact'>
            <div style={{ animation: anim }} className='img-container'>
                <h2>Find me at</h2>

                <img src={img} alt="" />
            </div>
            <div className='contact-list'>

                <a target='blank' href="https://wa.me/963935745337" className="square">
                    <img src={whatsapp} className='icon' alt="" />
                    +963 935745337</a>


                <a className="square" target='blank' href="https://www.linkedin.com/in/refaat-somaia-3667b6281/">
                    <img src={linkedIn} className='icon' alt="" />


                    Refaat Somaia</a>


                <a className="square" target='blank' href="https://github.com/Refaat-Somaia">
                    <FontAwesomeIcon className='icon' icon={faGithub} />

                    Refaat-Somaia</a>


                <a className="square" id='email' target='blank' href="mailto:refaat.somaia.official@gmail.com">
                    <img src={gmail} className='icon' alt="" />
                    refaat.somaia.official@gmail.com</a>
                <a target='blank' className='opacity-0 mx-48' href={resume}>

                    <button className="relative mt-8 h-16 w-48 bg-primary   overflow-hidden border border-primary
            rounded-xl text-text shadow-2xl transition-all duration-200 
            before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 
            before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-background 
            before:duration-300 before:ease-out hover:text-white hover:shadow-primary 
            hover:before:h-40 hover:before:w-48 hover:before:opacity-80">
                        <span className='relative text-lg'> <FontAwesomeIcon icon={faFile} style={{ marginRight: "0.5rem" }} />

                            Resume
                        </span>
                    </button>
                </a>





            </div>
        </div >
    )
}

export default Contact
