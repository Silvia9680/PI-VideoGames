import React, { useState, useEffect } from "react";
import  { postGame, getGenres, getPlatforms}   from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


function validate(input) {
    let error = {};
    if (!input.name.trim()) {
      error.name = "Name require";
    }
    if (!input.description.trim()) {
      error.description = "Description require";
    }
    if (!input.platforms.length) {
      error.platforms = "Platforms require";
    }
    return error;
  }

function CreateGame() {
    const dispatch = useDispatch();
    const genre =  useSelector(state => state.genres);
    const platform = useSelector(state => state.platforms)
    const history = useHistory();

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        platforms: [],
        genres: [],
    });
    
    function handleChange(e) {
        setInput({
            ...input, [e.target.name]: e.target.value,
        })

        setErrors(
            validate({
                ...input, [e.target.name]: e.target.value,
            })
        );
    }

    function handleSelectPlatform(e){
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        })
    }

    function handleSelectGenre(e){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postGame(input))
            alert("You've created a videogame!");
            setInput({
                name: "",
                description: "",
                releaseDate: "",
                rating: "",
                platforms: [],
                genres: [],
            })
            history.push('/home')
    } 

    function handleDeleteGenre(e) {
        setInput({
            ...input,
            genres: input.genres.filter(g => g !== e)
        })
    };

    function handleDeletePlatform(e) {
        setInput({
            ...input,
            platforms: input.platforms.filter(g => g !== e),
        })
    }

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms())
    },[dispatch]);

    return (
        <div className="crear">
        <div>
            <Link to="/home">
                HOME
            </Link>
        </div>
        <h1>
        <font color = "white">
            Create your own Videogame
            </font>
            </h1>
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                        key={input.id}
                        className="inputs"
                        placeholder="Name videogame"
                        required
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.name && <p><font color = "red">{errors.name}</font></p>}
                    </div>
                    <div>
                        <input
                         className="inputs"
                         placeholder="Description videogame"
                         type="text"
                         required
                         value={input.description}
                         name="description"
                         onChange={(e) => handleChange(e)}
                       />
                       {errors.description && <p><font color = "red">{errors.description}</font></p>}
                    </div>

                    <p>
                    <font color = "white">Platforms
                    </font>
                    </p>
                    <select onChange={(e) => handleSelectPlatform(e)}>
                        {platform.map(p => (
                            <option key= {p.name} value={p.name}>{p.name}</option>
                        ))}
                    </select>
                    
                    <div>
                {input.platforms.map((p) => (
                  <div>
                    <p>{p}</p>
                    <button onClick={() => handleDeletePlatform(p)}>Delete</button>
                  </div>
                ))}
              </div>
                    {errors.platforms && (<p><font color = "red">{errors.platforms}</font></p>)}
                
                   <div>
                       <p>
                       <font color = "white">
                        Release date:
                        </font>
                        </p>
                       <div>
                           <input
                            type="date"
                            value={input.releaseDate}
                            className="inputs"
                            name="releaseDate"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>

                        <p>
                        <font color = "white">Rating:
                        </font>
                        </p>
                        <div>
                            <input
                            className="inputs"
                            type="number"
                            value={input.rating}
                            min="0"
                            max="5"
                            name="rating"
                            onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>

                    <p>
                    <font color = "white">Genres
                    </font>
                    </p>
                    <select onChange={(e) => handleSelectGenre(e)}>
                        {genre.map(g => (
                            <option key={g.name} value={g.name}>{g.name}</option>
                        ))}
                    </select>

                    <div>
                        {input.genres.map(g => (
                            <div key={g.name} >
                                <p>{g}</p>
                            <button onClick={() => handleDeleteGenre(g)}>Delete</button>
                        </div>
                        ))}
                        </div>

                        <div>
                            <button type="submit" className="submit-btn">
                                Create
                            </button>
                   </div>
                </form>
            </div>
          </div>
    )
}

export default CreateGame;
