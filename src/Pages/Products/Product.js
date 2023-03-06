import React from 'react';
import { Link } from 'react-router-dom';
import heart from './heart.svg';
import './Products.css';
// import fichier Data
import inventory from '../../data/inventory';

const Product = () => {

    return (
        <div className='container-products'>
            {/* L'affichage depuis tableau "inventory" */}
            {
                inventory.map(item => {
                    return (
                        <Link 
                            to={{ pathname: `/produits/${item.title.replace(/\s+/g, '').trim()}` }}                           
                            key={item.id}
                        >
                            <div className="bloc-card">
                                <div className="product-card">
                                    <div className="visual-aspect">
                                        <img 
                                            src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
                                            alt="produit" 
                                            className='img-product'
                                        />
                                        <div className="like-container">
                                            <img src={heart} alt="icône j'aime" />
                                        </div>
                                    </div>

                                    <div className="info">
                                        <p>{item.title}</p>
                                        <p>Prix : {item.price}€</p>
                                    </div>
                                </div>

                                <div className="back-card"></div>

                            </div>                           
                        </Link>                       
                    )
                })
            }           
        </div>
    );
};
export default Product;