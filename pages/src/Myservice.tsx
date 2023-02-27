import Image from "next/image";
import data from "../../public/data.svg";

function Myservice(){
    return(
        <section className="bg-black p-4 mt-5">
          <div className="px-10">
            <div>
              <h1 className="mt-10 text-5xl font-bold mx-5 text-center items-center font-dancing text-white">Who are we</h1>
              <p className="font-bold px-2 font-poppins leading-8 py-4 text-center text-white">
                We are a software development team helping Small and Medium Enterprises (SMEs)
                transform their businesses by incorporating digital technological
                tools in their daily workflow.
              </p>
              <div className="container mx-auto">
                <Image src={data} alt="data service svg" width={300} className="mx-auto" />
              </div>

              <p className="font-bold px-2 font-poppins leading-8 py-4 text-center text-white">
                In a simple explaination we convert your business data into
                into an application.
              </p>
            </div>
            
            <div className="md:text-center">
              <h3 className="text-2xl py-1 pt-5 font-bold mx-5 text-white text-center font-dancing dark:text-white">WHAT WE CAN DO FOR YOU</h3>

              <p className="text-center text-white px-4 py-4 mx-auto font-poppins md:contianer md:mx-auto md:px-20 dark:text-white">
                Whatever Software your business requires, we are able to 
                design and develop well tailored solution specifically for your needs.
              </p>
            </div>
          </div>
         </section>
    )
}

export default Myservice;