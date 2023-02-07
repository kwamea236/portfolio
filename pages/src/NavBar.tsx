import {BsFillMoonStarsFill} from "react-icons/bs";

type Props={
    darkMode: boolean,
    setDarkMode: (dark:boolean)=>void
}

function NavBar({darkMode, setDarkMode}: Props){
    return(
        <div>
             <nav className="py-6 mb-1 flex justify-between">
                <h1 className="text-xl font-bold text-cyan-500 font-burtons">GenMagic</h1>
                <ul className="flex  items-center">
                    <li> <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer dark:text-white" /> </li>
                    <li><a className="bg-cyan-500 text-white px-4 py-2 rounded ml-8" href="#">Download CV</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;