import Link from "next/link";

function Mainbody(){
    return(
        <section className="">
            <div className="text-center p-10 mt-10">
              <h3 className="text-8xl py-2 px-20 font-bold text-black font-poppins text-center sm:text-5xl md:my-6">Software is the soul <span className="md:block">of your business.</span></h3>

              <p className="text-xl py-5 leading-8 text-black font-medium md:container md:mx-auto md:px-20 dark:text-white">
               We help organisation build software that unlocks their <span className="md:block">true potential,
               propelling them through make-or-break</span> moment with clarity and confidence.
              </p>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <button className="px-20 py-3 bg-black text-white font-bold cursor-pointer">See How We Can Help You</button>
              </Link>
              
            </div>
         </section>
    )
}

export default Mainbody;