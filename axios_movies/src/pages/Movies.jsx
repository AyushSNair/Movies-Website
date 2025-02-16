import React, { useEffect } from 'react';
import axios from 'axios'; // Import axios

const Movies = () => {
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const getMovieData = async () => {
        try {
            const res = await axios.get(API); // Make sure axios is used properly
            console.log(res.data.Search); // Log the response data
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);

    return (
        <div>Movies</div>
    );
};

export default Movies;
