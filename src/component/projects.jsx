import Project from './project';

import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faLaptop, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import flutter from "../assets/images/flutter.svg"
import js from "../assets/images/js.png"
import sqlite from "../assets/images/sqlite.svg"
// import carHuntVid from "../assets/CarHunt demo.mp4"
import css from "../assets/images/css.svg"
import firebase from "../assets/images/firebase.svg"
import html from "../assets/images/html.png"
import nodeJs from "../assets/images/nodeJs.jpg"

// import sparkleShipVid from "../assets/SparkleShip demo.mp4"
// import learnGateVid from "../assets/LearnGate demo.mp4"
// import soundlyVid from "../assets/Soundly demo.mp4"
// import budgetReactVid from "../assets/BudgetReact demo.mp4"
// import funlsihVid from "../assets/Funlish demo.mp4"
// import budgetFlutterVid from "../assets/BudgetFlutter demo.mp4"
import react from "../assets/images/react.png"
import socketIo from "../assets/images/Socket-io.png"
import images from "./images";


function Projects() {
    const { soundlyImages, sparkleShipImages, learnGateImages, carHuntImages, budgetReactImages, budgetFlutterImages, funlishImages, saeedImages } = images;

    return (
        <>


            <div className="conatiner-projects py-16 " id="projects" >
                <div className='flex justify-center items-center'>

                    <h1 className='text-text font-bold text-3xl'>My projects <span> </span>
                        <FontAwesomeIcon className='text-4xl ml-2' icon={faFolderOpen} />
                    </h1>

                </div>
                <Project
                    id={0}
                    images={sparkleShipImages}
                    title={"Scholarship Platform Application"}
                    color={"#1687A7"}
                    icon={faMobileScreenButton}
                    description={
                        <>




                            • Designed and implemented a user-friendly interface<br />
                            • Implemented API integration for user authentication, scholarship listings, search and filters, profile
                            updates, and other dynamic content using REST APIs<br />
                            • Built a profile-matching feature to recommend relevant scholarships based on user qualifications
                            and preferences<br />
                            • Built a real-time group chat functionality using Socket.IO
                            <br />
                            • Collaborated closely with the team on API structuring, debugging, and performance tuning
                            <br />

                        </>
                    }
                    codeLink="https://github.com/Refaat-Somaia/sparkleShip"
                    // vid={sparkleShipVid}
                    tech1={flutter}
                    device={'phone'}
                    tech2={nodeJs}
                    tech3={socketIo}
                    icon1Title="Flutter Mobile App"
                />
                <Project
                    id={0}
                    images={saeedImages}
                    title={"Quran Teaching Application"}
                    color={"#48A6A7"}
                    icon={faMobileScreenButton}
                    description={
                        <>
                            • Built for teachers at Saeed Basha Mosque to simplify daily tasks<br />
                            • Streamlines student attendance tracking and personal information management<br />
                            • Tracks each student's progress and accomplishments during sessions<br />
                            • Generates detailed session reports at the end of each class<br />

                            • Includes admin account for system management (add/remove/edit teachers)<br />
                            • Admins can access all teacher data including students and session history<br />
                            • Admin can generate Excel reports with session details over any time period<br />
                            • Uses Firebase Firestore for data storage and Firebase Authentication for secure login
                        </>
                    }
                    codeLink=""
                    tech1={flutter}
                    device={'phone'}
                    tech2={sqlite}
                    tech3={firebase}
                    icon1Title="Flutter Mobile App"
                />

                <Project
                    // vid={budgetFlutterVid}
                    images={budgetFlutterImages}
                    title={"Flutter Budget App"}
                    color={"#6AD0C1"}
                    icon={faMobileScreenButton}
                    tech1={flutter}
                    tech2={firebase}
                    tech3={sqlite}
                    description={
                        <>
                            • Budget management app developed with Flutter<br />
                            • Helps users track expenses and organize them into budgets<br />
                            • Provides visual statistics through charts for better spending analysis<br />
                            • Tracks spending patterns across days, weeks, and months<br />
                            • Uses SQLite for local data storage in the mobile app<br />
                            • Integrated with a React web version for cross-platform access<br />
                            • Enables data synchronization between mobile and web using Firebase Firestore<br />
                            • Supports data transfer and backup between devices
                        </>
                    }
                    icon1Title="Flutter Mobile App"
                    codeLink="https://github.com/Refaat-Somaia/budget_app_flutter"
                    device={'phone'}
                />
                <Project
                    images={soundlyImages}
                    title={"Music Player App"}
                    color={"#49108B"}
                    icon={faMobileScreenButton}
                    // vid={soundlyVid}
                    tech1={flutter}
                    description={
                        <>
                            • Customizable music player app for local audio files<br />
                            • Browse and search all device audio files in one place<br />
                            • Create and manage custom playlists<br />
                            • Features shuffle play, repeat mode, and notification controls<br />
                            • Tracks recently played songs<br />
                            • Offers multiple color themes and light/dark mode options
                        </>
                    }
                    icon1Title="Flutter Mobile App"
                    codeLink="https://github.com/Refaat-Somaia/Soundly---Music-Player"
                    device={'phone'}
                />

                <Project
                    // vid={funlsihVid}
                    images={funlishImages}
                    title="Online English Platform Landing Page"
                    color={"#6C63FF"}
                    device={'laptop'}
                    description={
                        <>
                            • Multilingual landing page (Arabic/English)<br />
                            • Includes price calculator feature<br />
                            • Team member presentation with auto-scrolling slider<br />
                            • Responsive design for all devices
                        </>
                    }
                    tech1={react}
                    tech3={css}
                    tech2={firebase}
                    icon1={faLaptop}
                    icon1Title="Web App - Responsive"
                    link="https://english-platfrom-website.web.app/"
                    codeLink="https://github.com/Refaat-Somaia/english_platform_website"
                />

                <Project
                    images={learnGateImages}
                    title="Student Portal Website"
                    color={"#3F72AF"}
                    device={'laptop'}
                    description={
                        <>
                            • Comprehensive student academic portal<br />
                            • View GPA, credits, faculty, and personal information<br />
                            • Admin dashboard for data management<br />
                            • Access and download lectures and grades<br />
                            • Productivity features: to-do list and timer<br />
                            • Customizable themes including dark mode
                        </>
                    }
                    // vid={learnGateVid}
                    tech1={js}
                    tech2={html}
                    tech3={css}
                    codeLink="https://github.com/Refaat-Somaia/LearnGate"
                    tech4={firebase}
                    icon1={faLaptop}
                    icon1Title="Web App - Responsive"
                />

                <Project
                    // vid={budgetReactVid}
                    images={budgetReactImages}
                    title="React Budget App"
                    color={"#6AD0C1"}
                    device={'laptop'}
                    description={
                        <>
                            • Budget tracking with spending analytics<br />
                            • Visual statistics for weekly/monthly/yearly spending<br />
                            • Uses React Context API for global state management<br />
                            • Custom useLocalStorage hook for persistent data<br />
                            • Responsive design across all devices
                        </>
                    }
                    tech1={react}
                    tech2={css}
                    tech3={firebase}
                    codeLink="https://github.com/Refaat-Somaia/react_budget_app"
                    icon1={faLaptop}
                    icon1Title="Web App - Responsive"
                    link="https://mybudget-cdb2f.web.app/"
                />

                <Project
                    // vid={carHuntVid}
                    images={carHuntImages}
                    title="Car Rental Website"
                    color={"#F99417"}
                    device={'laptop'}
                    description={
                        <>
                            • Browse available rental cars from Firebase database<br />
                            • Detailed car information pages<br />
                            • Secure booking system with date selection<br />
                            • User authentication for bookings<br />
                            • Admin approval system for rental requests<br />
                            • Responsive design for all devices
                        </>
                    }
                    codeLink="https://github.com/Refaat-Somaia/carHunt"
                    tech1={react}
                    tech2={css}
                    tech3={firebase}
                    link="https://carhunt-764b8.web.app/"
                />
            </div>

        </>);
}
export default Projects;
