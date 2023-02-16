import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import deved from "../../public/dev-ed-wave.svg";
import Image from "next/image";

function Mainbody(){
    return(
        <section className="min-h-screen">

            <div className="text-center p-10">
              <h2 className="text-3xl py-2 text-teal-500 font-medium">Hi there <div>I am Kwame Ato</div></h2>
              <h3 className="text-2xl py-2 dark:text-white">Software engineer</h3>

              <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
                Using cutting edge technologies such as <span className="text-cyan-500">nodejs, django, react </span> and other tools
                to build Full Stack application for client
              </p>
            </div>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-white">
                <a href="https://twitter.com/kwamea236"> <AiFillTwitterCircle /> </a>
                <a> <AiFillLinkedin className="cursor-pointer" /> </a>
                <a href="https://github.com/kwamea236"> <AiFillGithub /> </a>
            </div>

            <div className="relative bg-cyan-500 rounded-full mx-auto w-80 h-80 mt-20 overflow-hidden items-center">
               <Image src={deved} alt="myself" className="mx-10 mt-10" />
            </div>

         </section>
    )
}

export default Mainbody;