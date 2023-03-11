import Link from "next/link";

function Mainbody(){
    return(
        <section className="">
            <div className="text-center p-10 mt-10">
              <h3 className="text-8xl py-2 px-20 font-bold text-white font-poppins text-center dark:text-white sm:text-5xl">Software is the soul of your business.</h3>

              <p className="text-xl py-5 leading-8 text-white font-medium font-poppins md:container md:mx-auto md:px-20 dark:text-white">
               We help organisation build software that unlocks their true potential,
               propelling them through make-or-break moment with clarity and confidence.
              </p>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <button className="px-20 py-3 bg-white text-black font-bold cursor-pointer">See How We Can Help You</button>
              </Link>
              
            </div>
         </section>
    )
}

export default Mainbody;