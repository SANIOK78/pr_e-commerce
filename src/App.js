import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Panier from './Components/panier/Panier';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Product';
import AfficheProduit from './Pages/afficheProduit/AfficheProduit';
import Contact from './Pages/Contact/Contact';
import ShoppingPanier from './Pages/ShopppingPanier/ShoppingPanier';


function App() {

  return (
    
    <>
      <Navbar />
      <Panier />

      <Routes>
     
        <Route path="/" element={ <Home /> } />
        <Route path="/produits" element={ <Products /> } />
        <Route path="/produits/:id" element={ <AfficheProduit /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/shoppingPanier" element={ <ShoppingPanier /> } />
        
      </Routes>
    </>
   
  );
}

export default App;
