import { BsFillMoonStarsFill } from "react-icons/bs";
import akyimagic from "../../public/akyimagic.png";
import Image from "next/image";
import { useState } from "react";

type Props = {
    darkMode: boolean,
    setDarkMode: (dark: boolean) => void
}

function NavBar({ darkMode, setDarkMode }: Props) {
    
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <nav>
                {/* medium to large screen nav bar */}
                <div className="hidden py-6 mb-1 justify-between px-10 md:flex">
                    <h1 className="text-xl font-bold text-teal-500 font-burtons">AkyiMagic</h1>
                    <ul className="flex  items-center">
                        <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer ml-1 text-teal-500 dark:text-white" /> </li>
                        <li><a className="bg-teal-500 text-white ml-1/2 px-4 py-2 rounded ml-8 font-bold" href="#">Download CV</a></li>
                    </ul>
                </div>


                {/* moile view */}
                <div className="py-6 mb-1 justify-between px-10 border-b-2 border-teal-500 shadow flex md:hidden">
                    <h1 className="text-xl font-bold text-teal-500 font-burtons">AkyiMagic</h1>
                    <div className="flex  items-center">
                        <button className={`block hamburger ${toggle ? "open flex": ""} focus:outline-none`} onClick={()=>setToggle(!toggle)}>
                            <span className="hamburger-top dark:bg-white"></span>
                            <span className="hamburger-middle dark:bg-white"></span>
                            <span className="hamburger-bottom dark:bg-white"></span>
                        </button>
                    </div>
                </div>

                <div className="md:hidden">
                    <div className={`absolute flex-col items-center self-end py-8 mt-2 space-y-6 font-bold bg-white ${toggle ? "flex": "hidden"} sm:w-auto sm:self-center left-6 right-6 drop-shadow-md dark:bg-teal-500`}>
                        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer ml-1 text-teal-500 dark:text-white"/>
                        <a className="bg-teal-900 text-white ml-1/2 px-4 py-2 rounded font-bold" href="#">Download Cv</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;