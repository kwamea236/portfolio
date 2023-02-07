import Image from 'next/image';
import python from "../../public/python.png";
import node from "../../public/node.png";
import javascript from "../../public/javascript.png"
import react from "../../public/react.png"
import next from "../../public/next.png"
import tailwind from "../../public/tailwind.png"
import postgres from "../../public/postgres.png"
import mysql from "../../public/mysql.png"
import expressjs from "../../public/expressjs.png"

function Myskills(){
    return(
        <section>
            <h3 className="text-2xl text-gray-800 text-center dark:text-white">My Skills</h3>
            {/**
             * Deck one
             */}
            <div className="lg:flex gap-10 justify-center">
                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={python} width={100} height={100} alt="python image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">Python</h3>
                </div>

                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={javascript} width={100} height={100} alt="javascript image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">JavaScript</h3>
                </div>

                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={react} width={100} height={100} alt="react image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">React</h3>
                </div>
              </div>

             {/**
              * Deck Two
            */}

              <div className="lg:flex gap-10 justify-center">
                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={node} width={100} height={100} alt="nodejs image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">NodeJs</h3>
                </div>

                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={next} width={100} height={100} alt="nodejs image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">NextJS</h3>
                </div>

                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={tailwind} alt="nodejs image" width={100} height={100} className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">Tailwind</h3>
                </div>
              </div>

              {/**
               * Deck 3
               */}

               <div className="lg:flex gap-10 justify-center">
                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={postgres} width={100} height={100} alt="nodejs image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">PosgresQl</h3>
                </div>

                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={mysql} width={100} height={100} alt="nodejs image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">My sql</h3>
                </div>

                <div className="text-center p-10 rounded-2xl mt-10 border hover:shadow-xl dark:bg-white">
                  <Image src={expressjs} width={100} height={100} alt="nodejs image" className="mx-auto lg:mx-auto md:mx-auto" />
                  <h3 className="text-lg font-medium">ExpressJs</h3>
                </div>
              </div>
         </section>
    )
}

export default Myskills;