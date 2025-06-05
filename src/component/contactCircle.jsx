import React from 'react'

function ContactCircle(props) {
    return (
        <div className="relative group w-[3rem] h-[3rem] bg-p rounded-full flex justify-center items-center">
            {/* Label */}
            <div className="absolute right-full mr-2 flex items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-10px] transition-all duration-300">
                <div className="relative bg-text text-background text-sm px-3 py-1 rounded-md">
                    {props.title}
                    {/* Arrow */}
                    <div className="absolute top-1/2 -right-1 translate-y-[-50%] w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-text"></div>
                </div>
            </div>

            {/* Icon */}
            <a target='blank' href={props.url}>
                <img src={props.img} className="w-[80%]" alt="WhatsApp Icon" />
            </a>
        </div>
    )
}

export default ContactCircle
