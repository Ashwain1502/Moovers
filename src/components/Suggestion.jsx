import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchMovieData from './api';
import Card from './Card';

const Suggestion = ({ name }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovieData(name);
      setMovieData(data);
    };

    fetchData();
  }, [name]);

  return (
    <div className="w-[35%] h-[85vh] bg-[#22223B] flex items-center flex-col overflow-y-auto scrollbar">
  {movieData && Array.from({ length: 10 }).map((_, index) => (
    <Card key={index} movie={movieData.contents[index]} />
  ))}
</div>
  );
};

Suggestion.defaultProps = {
  name: 'Default Name',
};

Suggestion.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Suggestion;
