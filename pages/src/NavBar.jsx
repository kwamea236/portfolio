import {BsFillMoonStarsFill} from "react-icons/bs";


function NavBar({darkMode, setDarkMode}){
    return(
        <div>
             <nav className="py-6 mb-12 flex justify-between">
                <h1 className="text-xl font-bold text-cyan-500 font-burtons">DevByKwame</h1>
                <ul className="flex  items-center">
                    <li> <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer" /> </li>
                    <li><a className="bg-cyan-500 text-white px-4 py-2 rounded ml-8" href="#">Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;