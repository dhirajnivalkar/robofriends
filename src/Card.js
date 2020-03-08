import React from 'react';

const Card = ({ id, name, email} ) => {
    return(
        <div className= "bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow" >
            <img alt= "Dhiraj" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p2>{email}</p2>
            </div>
        </div>
    );
}

export default Card;