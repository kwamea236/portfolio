import Image from "next/image";
import backend from "../../public/backend.svg";
import frontend from "../../public/frontend.svg";
import database from "../../public/database.svg";

function Myservice(){
    return(
        <section className="pb-5">
            <div className="md:text-center">
              <h3 className="text-2xl py-1 pt-5 font-bold mx-5 text-teal-500 dark:text-white">WHAT WE CAN DO FOR YOU</h3>

              <p className="font-bold text-left text-gray-700 px-4 py-4 mx-auto dark:text-white">
                Whatever Software your business requires, we are able to 
                design and develop well tailored solution specifically for your needs.
              </p>
              
              <div className="justify-center md:flex md:flex-row md:gap-3">

                <div className="bg-teal-300 rounded-lg px-6 my-4 shadow-lg md:basis-1/3">
                  
                  <h1 className="font-bold text-2xl text-white pt-5 text-left">Frontend Development</h1>
                  <p className="text-gray-800 leading-7 text-left">
                  When it comes to FrontEnd development we use tools such ReactJs, NextJs, Tailwindcss, and other technologies
                  that best fit a proposed project.
                  </p>
                </div>

                <div className="bg-teal-300 rounded-lg px-6 my-4 shadow-lg md:basis-1/3">

                  <h1 className="font-bold text-2xl text-white pt-5 text-left">Backend Development</h1>
                  <p className="text-gray-800 leading-7 text-left">
                  When a project requires that Backend magic touch we use 
                  tools such as NodeJS, ExpressJS and Django a python framework 
                  to add the specialized features, especially API.
                  </p>
                  
                </div>

                <div className="bg-teal-300 rounded-lg px-6 my-4 shadow-lg md:basis-1/3">

                  <h1 className="font-bold text-2xl text-white pt-5 text-left">Database Development</h1>
                  <p className="text-gray-800 leading-7 text-left">
                    Database development is an important aspect of every application, this is this were
                    the projects data is kept. We use Postgresql and Mysql for most of our
                    projects this is because they use Structured Query Language which is 
                    a domain-specific language used in managing data relational databases.
                  </p>
                </div>
              </div>
            </div>
         </section>
    )
}

export default Myservice;