import Button from "./Button";

function Hero({hero}) {
    return(
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        {hero.title}
      </h1>
      <p className="mb-8 leading-relaxed">
        {hero.description}
      </p>
      <div className="flex justify-center">
        <Button label={hero.buttonText}/>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={hero.image}
      />
    </div>
  </div>
</section>
    )
}
export default Hero;