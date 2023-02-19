import { BsFillMoonStarsFill } from "react-icons/bs";
import akyimagic from "../../public/akyimagic.png";
import Image from "next/image";

type Props = {
    darkMode: boolean,
    setDarkMode: (dark: boolean) => void
}

function NavBar({ darkMode, setDarkMode }: Props) {
    return (
        <div>
            <nav>
                {/* medium to large screen nav bar */}
                <div className="hidden py-6 mb-1 justify-between md:flex">
                    <h1 className="text-xl font-bold text-teal-500 font-burtons">AkyiMagic</h1>
                    <ul className="flex  items-center">
                        <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer ml-1 text-teal-500 dark:text-white" /> </li>
                        <li><a className="bg-teal-500 text-white ml-1/2 px-4 py-2 rounded ml-8 font-bold" href="#">CV</a></li>
                    </ul>
                </div>

                {/* moile view */}
                <div className="py-6 mb-1 justify-between flex md:hidden">
                    <h1 className="text-xl font-bold text-teal-500 font-burtons">AkyiMagic</h1>
                    <div className="flex  items-center">
                        <button className="block hamburger focus:outline-none">
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </div>

                <div className="md:hidden">

                </div>
            </nav>
        </div>
    )
}

export default NavBar;