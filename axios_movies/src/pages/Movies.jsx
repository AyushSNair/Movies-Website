import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from "../components/UI/Card.jsx";

const Movies = () => {
    const [data, setData] = useState([]);
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const getMovieData = async () => {
        try {
            const res = await axios.get(API);
            setData(res.data.Search); // Extract movie data from the API response
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <div className="container">
            <ul className="grid grid-four--cols">
                {
                    data.length > 0 ? (
                        data.map((curElem) => (
                            <Card key={curElem.imdbID} movieData={curElem} />
                        ))
                    ) : (
                        <p>Loading movies...</p>
                    )
                }
            </ul>
        </div>
    );
};

export default Movies;
