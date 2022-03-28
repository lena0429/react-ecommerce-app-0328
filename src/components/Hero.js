import React from 'react';
import photo from '../images/photo-grid.jpg';

function Hero(){
    return(
        <section className="hero">
            <img src={photo} className="hero--grid" alt="grid"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )

}

export default Hero;