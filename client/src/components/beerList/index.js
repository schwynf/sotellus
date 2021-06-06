//dependencies
import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
//css
import './index.css';

function BeerList(props) {
    return (
        <>
            <Zoom key={props.id}>
                <h3>{props.name}</h3>
                <img src={props.image} id="image-beers-api"></img>
                <p>{props.description}</p>
                <p>ABV: {props.abv}</p>
                <p>IBU: {props.ibu}</p>
            </Zoom>
        </>
    );
}

export default BeerList;