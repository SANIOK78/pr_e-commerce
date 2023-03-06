import React from 'react';
import './Home.css';
import imgHome from './shopimg.jpg';

const Home = () => {

    return (

        <div className='global-container'>
            <h1 className='home-title'>
                Bienvenue au <span>Shop</span>
            </h1>

            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Dicta ducimus nobis eveniet,
                ut aut reprehenderit omnis, eligendi error 
                dolore laudantium, eaque inventore tenetur eos
                dolorum recusandae sapiente iure.
            </p>

            <img src={imgHome} alt="accueil shop " />
        </div>
    );
};

export default Home;