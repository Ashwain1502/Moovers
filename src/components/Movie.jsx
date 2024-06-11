import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Movie = ({ name }) => {
  const [imdbId, setImdbId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch movie details from OMDB API
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=fbf67667&t=${name}`);
        if (response.data && response.data.Response === "True") {
          setImdbId(response.data.imdbID);
        } else {
          console.error('Movie not found or error in response');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [name]);

  return (
    <div className="w-[70vw] h-[65vh] bg-[#22223B] flex justify-center items-center">
      <div className="w-[95%] h-[92%] bg-[#4A4E69] rounded-xl text-6xl flex justify-center items-center text-white">
        {loading ? (
          <p>Loading...</p>
        ) : imdbId ? (
          <iframe
            title="movie-player"
            src={`https://vidsrc.to/embed/movie/${imdbId}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Movie not found</p>
        )}
      </div>
    </div>
  );
};

Movie.defaultProps = {
  name: 'Default Name',
};

Movie.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Movie;
