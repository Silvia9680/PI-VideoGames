import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameName } from '../../redux/action'


 function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!name.length){
            alert("Please enter a Videogame");
        }else{
            dispatch(getGameName(name));
            setName("");
            
        }
    };

    return (
        <>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <div>
                <input 
                    type="text"
                    value={name}
                    placeholder="Search a Videogame "
                    onChange={(e) => {handleInputChange(e)}}
                    />
                <button type="submit">Search</button>
            </div>
        </form>
    </>
    )
};

export default SearchBar;