import Image from "next/image";
import backend from "../../public/backend.svg";
import frontend from "../../public/frontend.svg";
import database from "../../public/database.svg";

function Myservice(){
    return(
        <section>
            <div className="mt-5 md:text-center">
              <h3 className="text-3xl py-1 pt-5 font-bold dark:text-white">Services I offer</h3>
              
              <div className="md:flex gap-5 justify-center">
                <div className="bg-teal-300 rounded-lg px-6 my-4 shadow-lg">

                  <div>
                    <div className="bg-teal-900 py-6 px-6 w-20 rounded-b-md"> <Image src={frontend} alt="" height={300} /> </div>
                  </div>
                  <h1 className="font-bold text-2xl text-white pt-10">Frontend Development</h1>
                  <p className="text-gray-800 leading-7">
                  As a frontend developer, I structure content using
                  HTML, style it with Csss and add Javascript when case
                  calls for more complex interactivity
                  </p>
                  <p className="text-gray-800 py-4 leading-7">
                  When the occasion calls for it, i also use frontend
                  framework like ReactJS, NextJs and I enjoy doing so because of the
                  develoment speed
                  </p>
                </div>

                <div className="bg-teal-300 rounded-lg px-6 my-4 shadow-lg">

                  <div>
                    <div className="bg-teal-900 py-6 px-6 w-20 rounded-b-md"> <Image src={backend} alt="" height={300} /> </div>
                  </div>
                  <h1 className="font-bold text-2xl text-white pt-10">Backend Development</h1>
                  <p className="text-gray-800 leading-7">
                  As a frontend developer, I structure content using
                  HTML, style it with Csss and add Javascript when case
                  calls for more complex interactivity
                  </p>
                  <p className="text-gray-800 py-4 leading-7">
                  When the occasion calls for it, i also use frontend
                  framework like ReactJS, NextJs and I enjoy doing so because of the
                  develoment speed
                  </p>
                </div>

                <div className="bg-teal-300 rounded-lg px-6 my-4 shadow-lg">

                  <div>
                    <div className="bg-teal-900 py-6 px-6 w-20 rounded-b-md"> <Image src={database} alt="" height={300} /> </div>
                  </div>
                  <h1 className="font-bold text-2xl text-white pt-10">Database Development</h1>
                  <p className="text-gray-800 leading-7">
                  As a frontend developer, I structure content using
                  HTML, style it with Csss and add Javascript when case
                  calls for more complex interactivity
                  </p>
                  <p className="text-gray-800 py-4 leading-7">
                  When the occasion calls for it, i also use frontend
                  framework like ReactJS, NextJs and I enjoy doing so because of the
                  develoment speed
                  </p>
                </div>
              </div>

              <hr className="w-48 h-0.5 mx-auto my-4 bg-gray-500 border-0 mb-10 dark:bg-white" />    
            </div>
         </section>
    )
}

export default Myservice;