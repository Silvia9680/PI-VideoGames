import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/action";

 function CardDetail() {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [id, dispatch]);

    let detail = useSelector(state => state.detail);

    function handleReset() {
        dispatch(getDetail());
    }

    return (
        
        <div>
            <Link className="home" to="/home" onClick={handleReset}>
                HOME
            </Link>
            
                    <div>
                        <div className="Title">
                        <p> 
                        <font color= "white">
                            Title:{" "}{detail.name}
                            </font>
                            </p>
                        </div>

                        <img src={detail.background_image} alt='img not found' width= "500px" heigh= "500px" />


                        <p>
                        <font color= "white">
                            Released date:{" "}{detail.released || detail.releaseDate}
                            </font>
                            </p>

                        <p>
                        <font color= "white">
                            Platforms:{" "}

                            {detail.id?.length > 7
                            ? detail.platforms?.map(p => p.name).join(" - ")
                            : detail.platforms?.map(p => p.platform.name).join(" - ")}
                            </font>
                        </p>

                        <p>
                        <font color= "white">
                            Genres:{" "}
                            {detail.genres?.map(g => g.name).join("-")}
                            </font>
                        </p>

                        <p>
                        <font color= "white">
                            Rating:{" "}
                            {detail.rating}
                            </font>
                        </p>

                        <p>
                            <font color= "white">Description:{" "}
                            {detail.description_raw || detail.description}</font>
                        </p>
                    </div>
                </div>
            
        
    )
}

export default CardDetail;