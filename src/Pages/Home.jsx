import '../App.css'
import landingPageData from '../Webdata/webdata'
import Hero from '../components/Hero'
import Feature from '../components/Features'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer'
import Pricing from '../components/pricing'
import CallToAction from '../components/Cta'

function Home() {
    const {header, slides, callToAction, features, footer, pricing, testimonials} = landingPageData   
      return (
 <div>
<Hero slides = {slides}/>
<Feature features={features}/>
<Testimonials testimonials = {testimonials}/>
<section id="pricing-section">
        <Pricing pricing={pricing} />
      </section>  
<CallToAction callToAction={callToAction}/>
<Footer footer = {footer} header={header}/>
</div> 
    
      );
    }
    
    export default Home;