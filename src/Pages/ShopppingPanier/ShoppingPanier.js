import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ShoppingPanier.css';

const ShoppingPanier = () => {
    const storeState = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = (event, id) => {
        // récup de l'index de l'objet
        const indexItem = storeState.cart.findIndex(obj => obj.id === id);

        const objUpdated = {
            ...storeState.cart[indexItem],        //copie toute info de l'ancien objet
            quantity: Number(event.target.value)  // et on modifie la quantité
        }

        // dispatch vers reducer la mise a jour
        dispatch({
            type: "UPDATEITEM",
            payload : objUpdated
        })
    }

    // calcule du total
    let totalPrice = 0;
    if (storeState.cart.length !== 0 ){
        for( const item of storeState.cart ){
            const itemPrice = item.price * item.quantity;

            totalPrice = totalPrice + itemPrice;
        }
    }

    return (
        <div className='global-container'>
            <p className="heading-cart">Votre panier </p>

            <ul className="cart-list">
                {
                    storeState.cart.map((item) => {
                        return (
                            <li key={item.id}>
                                <img 
                                    src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                                    alt="icône produit" 
                                />
                                <div className="bloc-cart-infos">
                                    <h4>{item.title} </h4>
                                    <p> {item.price}€ </p>
                                </div>

                                <div className="bloc-input">
                                    <label htmlFor="quantityInput">Quantité </label>
                                    <input 
                                        onChange={e => handleChange(e, item.id)}
                                        type="number" 
                                        id='quantityInput' 
                                        value={item.quantity}/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            <p className="total-price">Total : {totalPrice.toFixed(2)}€ </p> 
            <button className='btn-cart'>Procédr au paiement</button>
        </div>
    );
};
export default ShoppingPanier;