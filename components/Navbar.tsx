import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
        <nav>
            <ul className='mx-4 flex bg-purple-500 py-5'>
                <li className='mx-4 px-4 cursor-pointer'>Home</li>
                <li className='mx-4 px-4 cursor-pointer'>About</li>
                <li className='mx-4 px-4 cursor-pointer'>contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar