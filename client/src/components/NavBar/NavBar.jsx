import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
 
import './NavBar.css';

 function Navbar ({handleFilterGenre, handleFilterCreated, handleRating, handleSort}){
    
    const allGenre = useSelector(state => state.genres);

    return (
        <div>
            <div>
                <SearchBar />
            </div>

            <div>
                    <select className='order'
                    onChange={e => handleSort(e)}>
                        <option>Order</option>                    
                        <option value="asc">Order A-Z</option>
                        <option value="desc">Order Z-A</option>
                        
                    </select>

                    <select className='rating'
                    onChange={e => handleRating(e)}>
                        
                        <option>Rating</option>
                        <option value="top">Rating Top</option>
                        <option value="low">Rating Low</option>

                    </select>

                    <select className='origin'
                    onChange={e => handleFilterCreated(e)}>

                        <option>Games</option>
                        <option value="all">All</option>
                        <option value="created">Created</option>
                        <option value ="api">Existent</option>

                    </select>

                <select className='genre'
                    onChange={e => handleFilterGenre(e)}>

                         <option> 
                        Genres 
                        </option>
                        <option value="all">All</option>

                        {allGenre.map((genre) => (
                            <option key={genre.name} 
                                    value={genre.name}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
      
    )
   
};

export default Navbar;