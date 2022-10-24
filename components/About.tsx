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
        <h4 className='mx-1 md:mx-5 md: mt-3 text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus id aperiam doloribus, perspiciatis numquam iusto, pariatur consectetur modi nemo velit maiores explicabo quas sunt illum quos. Autem, officia quia.
        Libero, neque odit doloremque quia, sint enim accusamus non unde Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus deserunt veniam, dolorum ex fugit aliquid ducimus aspernatur iure amet, beatae ullam harum ea inventore animi </h4>
        </div>
        
    </div>
  )
}

export default About