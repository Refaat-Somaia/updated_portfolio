import React from 'react'
import { Link } from 'react-scroll'
import resume from "../assets/Refaat Somaia CV.pdf"

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faFolderOpen, faFile, faPhone } from '@fortawesome/free-solid-svg-icons'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (winScroll / height) * 100
            setScrollProgress(scrolled)
        }

        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navLinks = [
        { to: "profile", text: "About me" },
        { to: "skills", text: "Skills" },
        { to: "projects", text: "Projects" },
        { href: resume, text: "Resume" },
        { to: "contact", text: "Contact me" }
    ]

    return (
        <>
            <nav className="w-full fixed top-0 h-20 body-bg z-50 flex justify-between items-center px-4 md:px-8 ">
                {/* Mobile menu button */}
                {/* <div className="md:hidden z-50">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-text text-2xl focus:outline-none"
                    >
                        {isMobileMenuOpen ? <FontAwesomeIcon className='text-4xl ' icon={faTimes} />
                            : <FontAwesomeIcon className='text-4xl ' icon={faBars} />
                        }
                    </button>
                </div> */}

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-end w-full navBar">
                    {navLinks.map((link, index) => (
                        link.to ? (
                            <Link
                                key={index}
                                offset={-50}
                                to={link.to}
                                smooth={true}
                                spy={true}
                                duration={500}
                                className="navBtn  duration-300 px-5 text-text text-lg lg:text-xl text-right cursor-default hover:text-primary "
                            >
                                {link.text}
                            </Link>
                        ) : (
                            <a
                                target='blank'
                                key={index}
                                href={link.href}
                                className="navBtn duration-300 px-5 text-text text-lg lg:text-xl text-right cursor-default hover:text-primary transition-all"
                            >
                                {link.text}
                            </a>
                        )
                    ))}
                </div>

                {/* Mobile Navigation */}
                {/* {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 body-bg flex flex-col justify-center items-center space-y-8 z-40">
                        {navLinks.map((link, index) => (
                            link.to ? (
                                <Link
                                    key={index}
                                    offset={-200}
                                    to={link.to}
                                    smooth={true}
                                    spy={true}
                                    duration={500}
                                    className="text-text text-2xl cursor-pointer hover:text-primary transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    {link.text}
                                </Link>
                            ) : (
                                <a target='blank'
                                    key={index}
                                    href={link.href}
                                    className="text-text text-2xl cursor-pointer hover:text-primary transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    {link.text}
                                </a>
                            )
                        ))}
                    </div>
                )} */}

                <div
                    style={{ width: scrollProgress + "%" }}
                    className="scroll-progress bg-grad md:block"
                />
            </nav>
            <div className="bottomNav flex md:hidden">

                <Link offset={-100} to="skills" smooth={true} spy={true} duration={500} className='bottomNav-btn'>
                    <FontAwesomeIcon className='icon' icon={faGears} />
                    <p>Skills</p></Link>    <Link offset={-100} to="projects" smooth={true} spy={true} duration={500} className='bottomNav-btn'>
                    <FontAwesomeIcon className='icon' icon={faFolderOpen} />
                    <p>Projects</p></Link>
                <a target='blank' href={resume} className='bottomNav-btn'>
                    <FontAwesomeIcon className='icon' icon={faFile} />
                    <p>Resume</p>
                </a>
                <Link offset={-100} to="contact" smooth={true} spy={true} duration={500} className='bottomNav-btn'>
                    <FontAwesomeIcon className='icon' icon={faPhone} />
                    <p>Contact me</p></Link>




            </div>

        </>
    )
}

export default NavBar