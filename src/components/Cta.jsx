import Button from "./Button";

function CallToAction({callToAction}) {

  const scrollToPricing = () => {
    const section = document.getElementById('pricing-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

 return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
     
      <div className="md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start Your Journey to Better Health!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Sign up today and take the first step towards a healthier, happier you.
        </p>
        <Button label="Get Started" onClick={scrollToPricing} />
      </div>
      
      <div className="md:w-1/2">
        <img
          src="https://media.licdn.com/dms/image/C5112AQGZunIV_LQn4g/article-cover_image-shrink_720_1280/0/1582786315933?e=2147483647&v=beta&t=m70xuH_rXNLXi4hxx6iQb2CvA1JAIhsHHCoDgFu1FEQ"
          alt="Health Journey"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
  

 )
}

export default CallToAction;