import React from 'react';

function Card(props){
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === 'Online') {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} alt="" className="card--thumbnail" />
            <div className="card--stats">
               <img src="../images/star-icon.png" className="card--star" alt="" />
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