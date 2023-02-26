import Image from "next/image";
import ImgReact from "../../public/react.png";
import Postgress from "../../public/postgres.png";

function Mainbody(){
    return(
        <section>
            <div className="text-center p-10 mt-10">
              <h3 className="text-5xl py-2 font-bold text-white dark:text-white">UPGRADE YOUR BUSINESS</h3>

              <p className="text-xl py-5 leading-8 text-white font-medium md:container md:mx-auto md:px-20 dark:text-white">
                With Custom Built Website Designs and Web Applications, Optimised for SEO
                and Built with Modularity Intent for Better Product development and experience.
              </p>
            </div>

            <div className="text-center">
              <button className="px-20 py-3 bg-white text-black font-bold cursor-pointer">Contact Us</button>
            </div>

            <div className="pt-5 animate-slow flex justify-between">
              <Image src={ImgReact} width={100} height={50} alt="" className="" />
              <Image src={Postgress} width={100} height={100} alt="" className="" />
            </div>
         </section>
    )
}

export default Mainbody;