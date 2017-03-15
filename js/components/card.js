import React from 'react';

export default function Card() {
    const name = 'Ace';
    const imageUrl = 'http://www.iconarchive.com/download/i65358/icons-land/metro-raster-sport/Casino-Playing-Cards.ico';
    const text = 'This is a card';
    return (
        <div className="card">
            <div className="card-name">{name}</div>
            <img className="card-img" src={imageUrl} />
            <div className="card-type">
                {text}
            </div>
        </div>
    );
}