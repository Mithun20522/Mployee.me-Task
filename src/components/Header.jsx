import logo from '../images/logo.png'
import profile from '../images/userProfile.png'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 border-b-2">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-between">
            <ul className="flex items-center gap-2 text-sm mx-5">
                <li>Resume Scan</li>
                <li className='bg-orange-100 text-[#FF9800] text-xs  px-1 py-1 rounded-full'>New Launch</li>
                <li>Resume Keywords</li>
                <li>Resume Services</li>
                <li>Career Blogs</li>
                <li>About Us</li>
            </ul>
            <div className="flex items-center bg-[#F5F6F7] px-2 py-1 gap-1 rounded-3xl mx-2 ">
                <img src={profile} alt="user profile" className='rounded-full' />
                <span className='text-xs'>Divyanshu</span>
                <IoIosArrowDown className='text-xs'/>
            </div>
        </div>
    </header>
  )
}

export default Header