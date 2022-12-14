import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCricles from './BackgroundCricles';
import Link from 'next/link'
import { BsArrowBarDown } from 'react-icons/bs';
type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words: ["Hi-my-name-is-vidit.tsx",
            "Guy-who-loves-Music.tsx",
            "< ButLovesToCodeMore />"
        ],
        loop : true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
            <BackgroundCricles/>
            <h1 className='text-[9px] md:text-sm uppercase text-gray-500 pb-2 tracking-[14px]'>SOFTWARE ENGINEER</h1>
            <h1 className="md:text-5xl font-semibold scroll-px-10 text-3xl">{text}</h1>
            <div className='mt-3'>
                <Link href="/About" ><button className=" text-[7px] cursor-pointer uppercase md:text-xs tracking-[3px] text-gray-300 py-3 px-3">About</button></Link>
                <Link href="#experience"><button className=" text-[7px] cursor-pointer uppercase md:text-xs tracking-[3px] text-gray-300 py-3 px-3">Experience</button></Link>
                <Link href="#skills"><button className=" text-[7px] cursor-pointer uppercase md:text-xs tracking-[3px] text-gray-300 py-3 px-3">Skills</button></Link>
                <Link href="#projects"><button className=" text-[7px] cursor-pointer uppercase md:text-xs tracking-[3px] text-gray-300 py-3 px-3">Projects</button></Link>
            </div>
            <div className='mt-[60px] md:mt-25 text-5xl'>
                <BsArrowBarDown/>
            </div>
        </div>
    )
}

export default Hero 