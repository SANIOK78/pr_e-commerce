import React, { useState, useRef, useEffect } from 'react';
// Pour utiliser les paramétres URL
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './AfficheProduit.css';
import inventory from '../../data/inventory';

const AfficheProduit = () => {
    const [nbMugs, setNbMugs] = useState(0);
    const { id } = useParams();  
    const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, '').trim() === id);

    // Logique pour afficher un message confirmant l'ajout du nouveau objet
    const  addingInfo = useRef();
    let timerInfo;
    let display = true;

    const dispatch = useDispatch();

    const updateMugs = e => {
        setNbMugs(Number(e.target.value))
    }

    // Sumission du formulaire
    const addToCart = e => {
        e.preventDefault();

        const itemAdded = {
            // on va récupérer tous ce qu'il y a dans "inventory[productClicked]"
            ...inventory[productClicked],
            quantity: nbMugs               //et on rajoute la nouvelle quantité 
        }

        dispatch({
            type: "ADDITEM",
            payload: itemAdded
        })

        addingInfo.current.innerText = "Ajouté au panier";

        if(display) {
            display = false;
            timerInfo = setTimeout(() => {
                addingInfo.current.innerText = "" ; 
            }, 600);

            display = true;
        }
    }

    // Quand on quite le composant, on doit nettoyer/supprimer le "setTimeout()"
    useEffect(() => {
        return () => {
            clearTimeout(timerInfo);
        }
    }, [])
  
    return (
        <div className='showcase'>
            <div className="container-img-showcase">
                <img 
                    src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} 
                    alt="icône produit" 
                    className='img-showcase'
                />
            </div>

            <div className="product-infos">
                <h2>{inventory[productClicked].title} </h2>
                <p>Prix : {inventory[productClicked].price}€ </p>

                <form onSubmit={addToCart}>

                    <label htmlFor="quantity">Quantité </label>
                    <input type="number" id='quantity' value={nbMugs}
                        onChange={updateMugs}
                    />
                    <button>Ajouter au panier</button>

                    <span style={{color:"green", fontWeight:"bold"}}
                        ref={addingInfo}
                        className="adding-info"
                    ></span>
                    
                </form>
            </div>
        </div>
    );
};
export default AfficheProduit;