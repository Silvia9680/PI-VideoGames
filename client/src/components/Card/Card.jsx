import React from 'react';
import './Card.css';
 

function Card({ name, image, genres }){
    let genre = genres.map((e) => e.name);
    
    return (
        <div className='card'>
            <img src={image} alt='img not found' width='200px' height='200px' />
            <div className='title'>{name}</div>
            <div className='genero'>{genre.join("-")}</div>
           
           
            
        </div>
    )}


export default Card;