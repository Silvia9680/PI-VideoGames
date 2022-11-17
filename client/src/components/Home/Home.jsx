import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  filterByGenre, filterDbCreated, getGames, getGenres, getPlatforms, orderByRating, orderByName } from '../../redux/action';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import style from '../media/Videogames.png';
import './Home.css';

function Home(){
    
    const dispatch = useDispatch();
    const allGames = useSelector ((state) => state.games) //Esto es lo mismo que mapear
    

    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage] = useState(15) 
    const [order, setOrder] = useState("")
    
    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = allGames.slice(indexFirstGame, indexLastGame);

    const pagination = (pageNum) => {
        setCurrentPage(pageNum);
    };

    useEffect(()=>{
        dispatch(getGames());
    },[dispatch]);

    useEffect(() =>{
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, [dispatch]);
    console.log(getGames())

    function handleClick(e) {
    e.preventDefault();
    dispatch(getGames()); //para evitar que se buguee
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1); 
        setOrder(e.target.value); 
    }

    function handleRating(e) {
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    // function handleCreated(e){
    //   setSelectCreator(e.target.value);
    //   if(e.target.value === 'all')
    //   return dispatch(clearState());
    //   dispatch(filterDbCreated(e.target.value));
    // }
    function handleCreated(e){
        e.preventDefault();
        dispatch(filterDbCreated(e.target.value)); // X
        // setCurrentPage(1);  
        // setOrder(e.target.value);    
    }
    
    function handleFilterGenre(e) {
        e.preventDefault();
        dispatch(filterByGenre(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return(
        <div className='Home'>
       <div>
        <img src = {style} alt = {"Title"} width = '300px'/>
       </div>
       <div>
        <button  onClick={(e) => {handleClick(e)}}>
          Reload Games
        </button>
      </div>

<div>
    <NavBar
       handleSort= {handleSort}
       handleRating= {handleRating}
       handleFilterCreated= {handleCreated}  
       handleFilterGenre= {handleFilterGenre} 
  />
</div>  
<div>
    <Pagination 
       gamesPerPage= {gamesPerPage}
       allGames = {allGames.length}
       pagination = {pagination} >
    </Pagination>
</div>
  <ul className='Card'>
  {
    currentGames?.map( (el) => {
        return(
            <div >
          <Link to ={'/videogame/' + el.id}>
        <Card  

          key= {el.id}
          image= {el.image} alt ={el.name} 
          name= {el.name}
          genres = {el.genres}>
          </Card>
         </Link>
        </div>    
        )
    }) 
}

</ul>
</div>
    )
}

export default Home;
