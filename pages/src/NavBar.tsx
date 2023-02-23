import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Link from "next/link";

type Props = {
    darkMode: boolean,
    setDarkMode: (dark: boolean) => void,
    title: string
}

function NavBar({ darkMode, setDarkMode, title }: Props) {

    const [toggle, setToggle] = useState(false);
    const [stickyClass, setStickClass] = useState("");
    useEffect(()=>{
        window.addEventListener("scroll",stickNavbar);
        return ()=> window.removeEventListener("scroll", stickNavbar);
    }, []);

    const stickNavbar = ()=>{
        if(window !== undefined){
            let windowHeight = window.scrollY;
            windowHeight > 150 ? setStickClass("sticky-nav"): setStickClass("")
        }
    }

    return (
        <div className={`${stickyClass} navbar bg-white dark:bg-slate-800`}>
            <nav>
                {/* medium to large screen nav bar */}
                <div className="hidden py-6 mb-1 justify-between px-10 md:flex">
                    <Link href={`/`}>
                        <h1 className="text-2xl font-bold text-teal-500 font-dancing italic cursor-pointer">{title}</h1>
                    </Link>
                    <ul className="flex  items-center">
                        <li> <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer ml-1 text-teal-500 dark:text-white" /> </li>
                        <li><a className="bg-teal-500 text-white ml-1/2 px-4 py-2 rounded ml-8 font-bold hover:bg-teal-300" href="#">Proposal Template</a></li>
                    </ul>
                </div>


                {/* moile view */}
                <div className="py-6 mb-1 justify-between px-10 border-b-2 border-teal-500 shadow flex md:hidden">
                    <Link href={`/`}>
                        <h1 className="text-xl font-bold text-teal-500 font-dancing italic cursor-pointer">{title}</h1>
                    </Link>
                    <div className="flex  items-center">
                        <button className={`block hamburger ${toggle ? "open flex" : ""} focus:outline-none`} onClick={() => setToggle(!toggle)}>
                            <span className="hamburger-top dark:bg-white"></span>
                            <span className="hamburger-middle dark:bg-white"></span>
                            <span className="hamburger-bottom dark:bg-white"></span>
                        </button>
                    </div>
                </div>

                <div className="md:hidden">
                    <div className={`absolute flex-col items-center self-end py-8 mt-2 space-y-6 font-bold bg-white ${toggle ? "flex" : "hidden"} sm:w-auto sm:self-center left-6 right-6 drop-shadow-md dark:bg-teal-500`}>
                        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer ml-1 text-teal-500 dark:text-white" />
                        <a className="bg-teal-900 text-white ml-1/2 px-4 py-2 rounded font-bold" href="#">Proposal Template</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;