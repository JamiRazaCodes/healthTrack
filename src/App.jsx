import landingPageData from './Webdata/webdata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import AuthPage from './Pages/auth';
import Header from './components/Header';
import Billing from './Pages/Billing';
import aboutUsData from './Webdata/aboutus';
import ProductPage from './Pages/productPage';
import Detail from './Pages/ProductDetail';
import CartPage from './Pages/Cart';
import ActivityMonitoring from './Pages/ActivityMonitoring';
import NutritionPlanning from './Pages/NutritionPlanning';
import MentalWellness from './Pages/MentalWellness';

function App() {
  const { pricing } = landingPageData;
  

  return (
  
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage" element = {<ProductPage />}/>
        <Route path="/productPage/:id" element = {<Detail />}/>
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs aboutUsData={aboutUsData} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/billing/:planId" element={<Billing pricing={pricing} />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/activity-monitoring" element={<ActivityMonitoring />} />
        <Route path="/nutrition-planning" element={<NutritionPlanning />} />
        <Route path="/mental-wellness" element={<MentalWellness />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
