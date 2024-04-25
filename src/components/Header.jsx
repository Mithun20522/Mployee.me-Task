import logo from '../images/logo.png'
import profile from '../images/userProfile.png'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 border-b-2">
        <div>
            <img src={logo} alt="logo" className='cursor-pointer' />
        </div>
        <div className="flex items-center justify-between">
            <ul className="flex items-center gap-3 text-sm mx-5">
                <li className='cursor-pointer'>Resume Scan</li>
                <li className='bg-orange-100 hover:bg-orange-300 hover:text-white cursor-pointer text-[#FF9800] text-xs  px-2 py-1 rounded-full'>New Launch</li>
                <li className='cursor-pointer'>Resume Keywords</li>
                <li className='cursor-pointer'>Resume Services</li>
                <li className='cursor-pointer'>Career Blogs</li>
                <li className='cursor-pointer'>About Us</li>
            </ul>
            <div className="flex items-center bg-[#F5F6F7] px-2 py-1 gap-1 rounded-3xl mx-2 cursor-pointer">
                <img src={profile} alt="user profile" className='rounded-full' />
                <span className='text-xs'>Divyanshu</span>
                <IoIosArrowDown className='text-xs'/>
            </div>
        </div>
    </header>
  )
}

export default Header