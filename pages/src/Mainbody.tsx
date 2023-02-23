import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import deved from "../../public/dev-ed-wave.svg";
import Image from "next/image";

function Mainbody(){
    return(
        <section>

            <div className="text-center p-10">
              <h2 className="text-8xl py-2 text-teal-500 font-medium font-dancing">IKIGAI</h2>
              <h3 className="text-4xl py-2 font-bold dark:text-white">UPGRADE YOUR BUSINESS</h3>

              <p className="text-xl py-5 leading-8 text-gray-800 font-medium dark:text-white">
                With Custom Built Website Designs and Web Applications, Optimised for SEO
                and Built with Modularity Intent for Better Product Experience.
              </p>
            </div>

            <div className="text-center">
              <button className="bg-teal-500 px-20 py-3 text-white font-bold cursor-pointer hover:bg-teal-300">Contact Us</button>
            </div>

            <div className="text-center my-2">
              <button className="bg-white px-14 py-3 text-teal-500 border border-teal-500 font-bold cursor-pointer hover:bg-teal-300">More Information</button>
            </div>
         </section>
    )
}

export default Mainbody;