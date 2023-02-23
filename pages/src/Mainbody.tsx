import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import deved from "../../public/dev-ed-wave.svg";
import Image from "next/image";

function Mainbody(){
    return(
        <section className="min-h-screen">

            <div className="text-center p-10">
              <h2 className="text-3xl py-2 text-teal-500 font-medium font-dancing">BLERCHPALMER</h2>
              <h3 className="text-2xl py-2 dark:text-white">UPGRADE YOUR BUSINESS</h3>

              <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
                With Custom Built Website Designs and Web Applications, Optimised for SEO
                and Built with Modularity Intent for Better Product Experience.
              </p>
            </div>

            {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-white">
                <a href="https://twitter.com/kwamea236"> <AiFillTwitterCircle /> </a>
                <a> <AiFillLinkedin className="cursor-pointer" /> </a>
                <a href="https://github.com/kwamea236"> <AiFillGithub /> </a>
            </div> */}

            <div className="relative bg-teal-300 rounded-full mx-auto w-80 h-80 mt-2 overflow-hidden items-center">
               <Image src={deved} alt="myself" className="mx-10 mt-10" />
            </div>

         </section>
    )
}

export default Mainbody;