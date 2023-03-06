import React from 'react';
import { Link } from 'react-router-dom';
// selectionner le State depuis "react-redux"
import { useSelector } from 'react-redux';

import cartIcon from './shopping-cart.svg';
import './Panier.css';

const Panier = () => {

    const shoppingCart = useSelector(state => state)

    let totalItem = 0;                          //pour chaque "item" depuis le
    for(const item of shoppingCart.cart) {      //tableau "shoppingCart.cart"
        totalItem = totalItem + item.quantity;  //on rajout la nouvelle quantité
    }                                           //a la quantité existante

    return (

        <Link to="/shoppingPanier">

            <div className="floating-cart">
                <p>Votre Panier</p>

                <div className="img-notif-container">
                    <img src={cartIcon} alt="icône cadi" />

                    <span className="notif">{totalItem}</span>
                </div>   
                
            </div>
           
        </Link>
    );
};

export default Panier;