import Button from "./Button";

function Feature ({ features }) {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
      Empowering Your Health Journey
    <br className="hidden sm:block" />
    One Step at a Time
      </h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
       {features.map((data, ind) => (<div className="p-4 md:w-1/3 flex">
          <div key={data} className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 flex-shrink-0">
            {data.icon}
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              {data.title}
            </h2>
            <p className="leading-relaxed text-base">
              {data.description}
            </p>
          <Button  label={data.button}/>
          </div>
        </div>
               
       )
      )
       }
        </div>
    </div>
  </section>
  );
}

export default Feature;