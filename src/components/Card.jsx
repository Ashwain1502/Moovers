import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div className="w-[75%] h-[55vh] bg-[#F2E9E4] mt-10 rounded-lg flex justify-center items-center flex-col mb-2">
      <img
        src={movie.poster_path}
        alt="movie-img"
        className="w-[90%] rounded-lg h-[40vh] mt-2"
      />

      <div className='text-lg m-1'>
        {movie.title}
      </div>
      <a
        href={movie.youtube_trailer}
        target="_blank"
        rel="noopener noreferrer"
        className='text-md m-1 bg-red-700 text-white rounded-lg p-2'
      >
        Watch Trailer
      </a>
    </div>
  );
};

Card.defaultProps = {
  movie: {
    poster_path: '',
    title: 'Untitled',
    youtube_trailer: '#',
  }
};

Card.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    youtube_trailer: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
