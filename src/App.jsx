import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import Cart from './components/pages/Cart/Cart.jsx';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder.jsx';
import Services from './components/Services/Services.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Login/Login.jsx';
import Salad from './components/ourMenu/salad.jsx';
import Rolls from './components/ourMenu/Rolls.jsx';
import DessertsGallery from './components/ourMenu/Desert.jsx';
import CakeMenu from './components/ourMenu/cake.jsx';
import SandwichMenu from './components/ourMenu/sandwitch.jsx';
import PureVegMenu from './components/ourMenu/pureVeg.jsx';
import PastaMenu from './components/ourMenu/pasta.jsx';
import NoodlesMenu from './components/ourMenu/noodles.jsx';
const App = () => {
  const [showLogin, setShowLogin] = React.useState(false);

  return (
 <>
   {showLogin? <Login setShowLogin={setShowLogin}/> : <></> }
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/services' element={<Services />} />
        <Route path='/salad' element={<Salad />} />
        <Route path='/rolls' element={<Rolls />} />
        <Route path='/desserts' element={<DessertsGallery />} />
        <Route path='/cakes' element={<CakeMenu />} />
        <Route path='/sandwitch' element={<SandwichMenu />} />
        <Route path='/pure-veg' element={<PureVegMenu />} />
        <Route path='/pasta' element={<PastaMenu />} />
       <Route path='/noodles' element={<NoodlesMenu />} />
      </Routes>
    </div>  
    <Footer />
    </>
    
  );
};

export default App;
