import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto max-w-7xl items-center'>
        <motion.h3 
        initial={{
            x : -100
        }}
        whileInView={{
            x : 0
        }}
        // transition={{
        //     duration : .5
        // }}
         className="absolute top-24 tracking-[20px] uppercase mt-3 text-gray-400 text-sm md:text-2xl">About</motion.h3>

        <motion.img 
        initial ={{
            x : -100,
            opacity : 0,
            scale : 0
        }}
        whileInView={{
            x : 0,
            opacity : 1,
            scale : 1
        }}
        // transition={{
        //     duration : .5
        // }}
        className="-mb-20 md:mb-0 flex-shrink mt-[20px] h-[95px] w-[95px] md:mt-5 md:w-[200px] md:h-[250px] rounded-full object-cover" src="https://scontent.fbom65-1.fna.fbcdn.net/v/t39.30808-6/310097619_622873046058801_7589804280837915824_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=3Ab6AHptaPcAX_Gnay3&_nc_ht=scontent.fbom65-1.fna&oh=00_AT-xDp6TSGTUt8D8Jv_vI-SVe2f8V9AdkiOZlSJL7OBtoA&oe=635B5D21" alt="" />

        <div>
        <h1 className='mx-3 text-2xl mt-1'>Here is litte Background</h1>
        <h4 className='mx-1 md:mx-5 md: mt-3 text-[10px] md:text-lg'>I'm Vidit 💯. I am an engineering student at G H raisoni college of engineering CSE 3rd year. I have been coding since 4 years.. i have good command over CPP, JAVA , HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js apart from my technical skills i think i am good at mentoring, I am the lead of Google developer students club of my college and here i have conducted many events to make students aware about the google technologies, not just google technologies, i have also conducted a DSA bootcamp and apart from this if i would talk about myself then i would say i am an artist, i have a creative mind, and that is why i tend to overthing sometimes, my strenght is if i have started some work i will complete it with perfection or else i will leave it and if i would have to talk about my weakness then i am very impaitent, emotional fool.. but looking at the brighter side that all these strengts and weaknesses have worked well for me😊😊..
        </h4>
        </div>
        
    </div>
  )
}

export default About