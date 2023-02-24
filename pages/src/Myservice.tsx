function Myservice(){
    return(
        <section className="bg-white p-4 mt-5">
          <div className="px-10">
            <div>
              <h1 className="mt-10 text-4xl font-bold mx-5 text-center items-center text-teal-500">Who are we</h1>
              <p className="px-2 leading-8 py-4 text-center text-gray-700">
                We are a software development team helping Small and Medium Enterprises (SMEs)
                transform their businesses by incorporating digital technological
                tools in their daily workflow. Since 2021 we have been in close patnership
                with schools, hospitals, churches and other forms of institution to help them with
                technological tools for their specific needs.
              </p>
            </div>
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
          </div>
         </section>
    )
}

export default Myservice;