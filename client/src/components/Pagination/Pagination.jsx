import React from 'react';
import './Pagination.css'

function Pagination({gamesPerPage, allGames, pagination}){
    const pageNum =[];

    for( let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++ ){
        pageNum.push(i);    
    }
    return(
        <nav className='pagination'>
            
            {pageNum && pageNum.map(number => (
               
                <button className='num' key= {number} onClick={() => pagination(number)}>{number}</button>
               
            ))}
           
        </nav>
    )
}

export default Pagination;