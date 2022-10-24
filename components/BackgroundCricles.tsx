import React from 'react'

type Props = {}
// https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vidit_chawda_SBI4DDH.jpg
const BackgroundCricles = (props: Props) => {
  return (
    <div className= "relative flex justify-center items-center">
        <div className='absolute border mt-52 border-white-500 rounded-full h-[200px] w-[200px] animate-ping'/>
        {/* <div className='absolute border mt-52 border-white-500 rounded-full h-[300px] w-[300px] '/> */}
        <div className='absolute border mt-52 opacity-3 border-red-500 rounded-full h-[550px] w-[550px] '/>
        <div className='absolute rounded-full mt-52 border border-[#0af726] opacity-20 h-[550px] w-[550px] animate-pulse'/>
        <img className='rounded-full h-[120px] w-[120px] my-4 mt-52' src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/vidit_chawda_SBI4DDH.jpg" alt="" />
        <div />
    </div>
  )
}

export default BackgroundCricles