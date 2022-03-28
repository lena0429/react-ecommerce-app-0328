import React from 'react';
import travel from '../images/travel.jpg';
import star from '../images/star-icon.png';

function Card(){
    return(
        <div className="card">
            <img src={travel} alt="travel thumbnail" className="card--thumbnail" />
            <div className="card--stats">
               <img src={star} className="card--star"/>
               <span className="grey">5.0</span>
               <span className="grey">(6) •</span>
               <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p className="card--text"><span className="bold">From $136 /</span> person</p>
        </div>
    )

}

export default Card;