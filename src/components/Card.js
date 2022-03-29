import React from 'react';

function Card(props){
    let badgeText;
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === 'Online') {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.card.coverImg}`} alt="" className="card--thumbnail" />
            <div className="card--stats">
               <img src="../images/star-icon.png" className="card--star" alt="" />
               <span className="grey">{props.card.stats.rating}</span>
               <span className="grey">({props.card.stats.reviewCount}) •</span>
               <span className="grey">{props.card.location}</span>
            </div>
            <p>{props.title}</p>
            <p className="card--text"><span className="bold">From ${props.price} /</span> person</p>
        </div>
    )

}

export default Card;