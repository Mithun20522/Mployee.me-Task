import { GoDotFill } from 'react-icons/go';
import google from '../images/devicon_google.png';
import { BsSave2 } from 'react-icons/bs';
import { BsBag } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import {SemiCircleProgress} from 'react-semicircle-progressbar'
const JobDetailsCard = ({percent, color}) => {
  return (
    <div className='flex p-5 flex-col border mx-4 rounded-lg'>
    <div className='flex items-center justify-between w-[100%]'>
    <div className='flex items-center gap-2'>
            <div className='bg-slate-100 p-1 rounded-lg border'>
                <img src={google} alt="google" />
            </div>
            <div>
                <h1 className='font-semibold'>UI/UX Designer</h1>
                <ul className='flex items-center gap-3'>
                    <li className='text-gray-400'>Google</li>
                    <GoDotFill className='text-xs'/>
                    <li className='bg-orange-100 hover:bg-orange-300 text-[#FF9800] px-2 rounded-xl text-xs'>Figma</li>
                    <li className='bg-red-100 text-red-500 px-1 rounded-xl text-xs'>Prototyping</li>
                    <li className='bg-blue-200 text-blue-500 px-1 rounded-xl text-xs'>User Interfaces</li>
                </ul>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <button className='bg-[#FF9800] px-5 py-2 rounded-lg text-xs text-white'>Apply Now</button>
            <div className='flex items-center gap-2 border py-2 text-xs bg-slate-100 px-3 rounded-lg'>
                <BsSave2/>
                <button>Save</button>
            </div>
        </div>
    </div>
    <div className='flex justify-between'>
        <div>
            <div className='mt-3 text-sm'>
                <ul className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <BsBag/>
                        <p>0-3 Years</p>
                    </div>
                    <h1>|</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <CiClock2/>
                        <p>Full Time</p>
                    </div>
                    <h1>|</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-gray-400'>Posted on: </p>
                        <p>02 April 2024</p>
                    </div>
                </ul>
            </div>
            <div className='mt-3 text-gray-400 text-lg'>
                <div className='flex items-center gap-3'>
                    <GoDotFill className='text-xs'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorum.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <GoDotFill className='text-xs'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolorum.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center relative'>
           <SemiCircleProgress 
           percentage={percent}
           size={{width:150, height:150}}
           strokeWidth={7}
           strokeColor={color}/>
           <p className='absolute bottom-7 text-xs'>Match Score</p>
        </div>
    </div>
    </div>
  )
}

export default JobDetailsCard