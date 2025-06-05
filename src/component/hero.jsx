import { React, useState, useEffect } from 'react'
import whatsappIcon from '../assets/images/whatsapp-128-svgrepo-com.png'
import githubIcon from '../assets/images/github-142-svgrepo-com.png'
import gmailIcon from '../assets/images/mail-svgrepo-com.png'
import linkedInIcon from '../assets/images/linkedin-svgrepo-com.png'
import ContactCircle from './contactCircle'
import dots from '../assets/images/dots.png'
import { Link } from 'react-scroll'



import cubes from '../assets/images/cubes.png'


function Hero() {
  const [h1, setH1] = useState("Hello!");
  const [h2, setH2] = useState();
  let text = "I’m Refaat Somaia, a Flutter & Frontend Developer.".split(" ")

  useEffect(() => {
    let e = document.getElementsByTagName("h2")[0]
    e.innerHTML = ""
    // document.getElementsByTagName("h2")[0].innerHTML=""
    for (let i = 0; i < text.length; i++) {
      e.innerHTML += `<span>${text[i]} </span>`
    }
    setTimeout(() => {
      Array.from(e.children).forEach((child, i) => {

        if (i == 4 || i == 6) {

          child.classList.add("highlight")

        }
        const delay = i + 2 < 10 ? `${0}.${i + 2}s` : `${1}.${i % 10 + 3}s`;
        child.style.animation = `span-in 0.5s forwards ${delay}`;
      });
    }, 300);

  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-full h-[44rem] py-8  md:px-8">
      <div className="flex flex-col-reverse  md:flex-row justify-center items-center h-full w-full max-w-6xl">
        <div className="md:w-[10%] w-full md:h-4/6 h-auto flex md:flex-col flex-row justify-around items-center mb-8 ">
          <ContactCircle title="Whatsapp" url="https://wa.me/963935745337" img={whatsappIcon} />
          <ContactCircle title="GitHub" url="https://github.com/Refaat-Somaia" img={githubIcon} />
          <ContactCircle title="LinkedIn" url="https://www.linkedin.com/in/refaat-somaia-3667b6281/" img={linkedInIcon} />
          <ContactCircle title="Email" url="mailto:refaat.somaia.official@gmail.com" img={gmailIcon} />
        </div>

        <div className="md:mr-12 h-auto flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6 px-4 md:pl-4 w-full md:w-auto text-center md:text-left">
          <p className="text-text text-4xl md:text-4xl h1-container"><span>Hello👋</span></p>
          <h2 id='helloText' className="text-text text-xl md:text-2xl o-0">

          </h2>
          <div className="h-0 md:h-12"></div>
          <Link
            offset={-50}
            to="projects"
            smooth={true}
            spy={true}
            duration={500}
            className="navBtn px-5 text-text text-lg lg:text-xl text-right cursor-pointer hover:text-primary transition-colors"
          >
            <button className="relative mt-8 h-16 w-48 bg-primary overflow-hidden border border-primary
            rounded-xl text-text shadow-2xl transition-all duration-200 
            before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 
            before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-background 
            before:duration-300 before:ease-out hover:text-white hover:shadow-primary 
            hover:before:h-40 hover:before:w-48 hover:before:opacity-80">
              <span className='relative text-lg'>

                My experience
              </span>

            </button></Link>
          <div className="h-10 md:h-0"></div>

        </div>

        <div className='hidden md:block md:w-[20%]'></div>
      </div>

      <img src={dots} className="hidden md:block h-16 absolute right-10 bottom-10" alt="" />
      <img src={cubes} className="hidden md:block h-12 absolute left-12 bottom-12 motion-preset-seesaw" alt="" />

    </div>
  )
}

export default Hero