import React from 'react';

function Card(props){
    // console.log(props)
    return(
        <div className="card">
            <img src={`../images/${props.coverImg}`} alt="" className="card--thumbnail" />
            <div className="card--stats">
               <img src="../images/start-icon.png" className="card--star" alt="" />
               <span className="grey">{props.rating}</span>
               <span className="grey">({props.reviewCount}) •</span>
               <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="card--text"><span className="bold">From ${props.price} /</span> person</p>
        </div>
    )

}

export default Card;