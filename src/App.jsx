import landingPageData from './Webdata/webdata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Overview from './Adminpanel/Overview.jsx';
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
import BioForm from './Pages/bio-form';
import NewTrack from './Pages/NewTrack';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermCondition';
import Support from './Pages/Support.jsx';
import CartcontextProvider from './context/CartContext.jsx';
import CheckoutPage from './Pages/CheckOut.jsx';
import OrderHistoryPage from './Pages/OrderHistory.jsx';
import AdminRoutes from './Adminpanel/AdminROUTES.jsx';

function App() {
  const { pricing } = landingPageData;
  
  const [isAdmin, setIsAdmin] = useState(false); 
  const db = getFirestore();
  const auth = getAuth();
  useEffect(() => {
    const checkUserRole = async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "roles", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        checkUserRole(user);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  return (
  <CartcontextProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {isAdmin? (
          <Route path='/Overview' element={<Overview/>}/>
        ):(
          <Route path='/' element={<Home/>}/>
        )
        }
        <Route path="/productPage" element = {<ProductPage />}/>
        <Route path="/productPage/:id" element = {<Detail />}/>
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs aboutUsData={aboutUsData} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/billing/:planId" element={<Billing pricing={pricing} />} />
        <Route path="/Cart" element={<CartPage />}/>
        <Route path="/activity-monitoring" element={<ActivityMonitoring />} />
        <Route path="/nutrition-planning" element={<NutritionPlanning />} />
        <Route path="/mental-wellness" element={<MentalWellness />} />
        <Route path='/bio-form' element={<BioForm/>}/>
        <Route path='/NewTrack' element={<NewTrack/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="/TermCondition" element={<TermsAndConditions/>}/>
        <Route path="/Support" element={<Support/>}/>
        <Route path='/CheckOut' element={<CheckoutPage/>}/>
        <Route path="/OrderHistory" element = {<OrderHistoryPage/>}/>
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
    </CartcontextProvider>

  
  );
}

export default App;
