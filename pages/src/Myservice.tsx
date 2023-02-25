function Myservice(){
    return(
        <section className="bg-myDark p-4 mt-5">
          <div className="px-10">
            <div>
              <h1 className="mt-10 text-4xl font-bold mx-5 text-center items-center text-myRed">Who are we</h1>
              <p className="font-bold px-2 leading-8 py-4 text-center text-white">
                We are a software development team helping Small and Medium Enterprises (SMEs)
                transform their businesses by incorporating digital technological
                tools in their daily workflow.
              </p>
            </div>
            <div className="md:text-center">
              <h3 className="text-2xl py-1 pt-5 font-bold mx-5 text-myRed text-center dark:text-white">WHAT WE CAN DO FOR YOU</h3>

              <p className="text-center text-white px-4 py-4 mx-auto dark:text-white">
                Whatever Software your business requires, we are able to 
                design and develop well tailored solution specifically for your needs.
              </p>
            </div>
          </div>
         </section>
    )
}

export default Myservice;