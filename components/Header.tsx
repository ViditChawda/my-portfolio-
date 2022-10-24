import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

type Props = {}

const Header = (props: Props) => {
  return (
      <header className="sticky top-0 p-5 flex itmes-start justify-between">
        <motion.div className='flex flex-row items-center'
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition ={{
            duration : 1
          }}
        >

          <SocialIcon url="https://medium.com/@viditchawda301" fgColor="gray" bgColor="transparent" >
          </SocialIcon>
          <SocialIcon url="https://www.linkedin.com/in/vidit-chawda-b4a740210/" fgColor="gray" bgColor="transparent" >
          </SocialIcon>
          <SocialIcon url="https://www.instagram.com/accounts/login/?next=%2Fvidit.chawda%2F" fgColor="gray" bgColor="transparent" >
          </SocialIcon>
          <SocialIcon url="https://www.facebook.com/vidit.chawda.7" fgColor="gray" bgColor="transparent" >
          </SocialIcon>
        </motion.div>

        <motion.div className='cursor-pointer flex flex-row items-center' 
        initial={{
          x : 500,
          opacity: 0,
          scale : 0.5
        }}
        animate={{
          x : 0,
          opacity : 1,
          scale : 1
        }}
        transition={{
          duration : 1
        }}
        >
          <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" url="viditchawda301@gmail.com" >
          </SocialIcon>
          <p className=" text-sm hidden md:inline-flex text-gray-400">GET IN TOUCH</p>
        </motion.div>
      </header>
  )
}

export default Header