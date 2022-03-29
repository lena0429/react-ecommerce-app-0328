import React from 'react';
import star from '../images/star-icon.png';

function Card(props){
    // console.log(props)
    return(
        <div className="card">
            <img src={props.img} alt="" className="card--thumbnail" />
            <div className="card--stats">
               <img src={star} className="card--star" alt="" />
               <span className="grey">{props.rating}</span>
               <span className="grey">({props.reviewCount}) •</span>
               <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p className="card--text"><span className="bold">From ${props.price} /</span> person</p>
        </div>
    )

}

export default Card;