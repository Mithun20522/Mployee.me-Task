import { BsGrid1X2 } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { BsSave2 } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { TbHelpSquare } from "react-icons/tb";
import { SiStarship } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="w-[300px] p-5 bg-white border-r-2 min-h-screen flex flex-col justify-between">
        <div>
            <ul className="flex flex-col gap-2 text-sm">
                <div className="flex gap-3 items-center">
                    <BsGrid1X2/>
                    <li>Job Recommendation Tool</li>
                </div>
                <div className="flex gap-3 items-center">
                    <GoTasklist/>
                    <li>History</li>
                </div>
                <div className="flex gap-3 items-center justify-between mr-5 rounded-xl px-2 text-white text-sm bg-[#23283B]">
                    <div className="flex items-center gap-2">
                        <BsSave2 className="text-orange-400"/>
                        <li>Saved Jobs</li>
                    </div>
                    <div className="text-2xl mx-5 mt-1">{'^'}</div>
                </div>
                <div className="flex gap-3 items-center text-sm border rounded-lg py-2 px-1 mr-5">
                    <GoDotFill className="text-yellow-500"/>
                    <li>UI/UX Designer</li>
                </div>
                <div className="flex gap-3 items-center">
                    <GoDotFill className="text-slate-300"/>
                    <li>Web Developer</li>
                </div>
                <div className="flex gap-3 items-center">
                    <GoDotFill className="text-slate-300"/>
                    <li>Analyst</li>
                </div>
                <div className="flex gap-3 items-center">
                    <GoDotFill className="text-slate-300"/>
                    <li>Lorem Ipsum</li>
                </div>
                <div className="flex gap-3 items-center">
                    <RiMoneyDollarBoxLine/>
                    <li>Plans {'('}Current: Free{')'}</li>
                </div>
                <div className="flex gap-3 items-center">
                    <FaUsersGear/>
                    <li>Manage Profiles</li>
                </div>
            </ul>
        </div>
        <div>
        <div className="mb-7 p-3 text-sm">
            <span className="text-gray-400 text-sm">Help & Support</span>
            <ul className="space-y-2 mt-3">
                <div className="flex gap-3 items-center">
                    <MdOutlineSettings/>
                    <li>Settings</li>
                </div>
                <div className="flex gap-3 items-center">
                    <TbHelpSquare/>
                    <li>Help Center</li>
                </div>
            </ul>
        </div>
        <div>
            <div className="border px-1 py-2 mb-3 text-slate-800 rounded-lg text-xs text-start">Current Plan: Free</div>
            <div className="flex items-center max-w-fit bg-red-50 border border-yellow-500 justify-between py-3 rounded-xl p-3 cursor-pointer px-1 text-xs">
                <div className="flex items-center gap-4 justify-between">
                <SiStarship className="text-yellow-600 ml-3 text-3xl"/>
                <div>
                    <p className="font-semibold">Upgraded to Pro</p>
                    <p className="text-slate-500">Get all features</p>
                </div>
                </div>
                <h1 className="mx-5 text-lg">{'>'}</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar