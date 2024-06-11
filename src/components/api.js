// api.js
import axios from 'axios';

const fetchMovieData = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://movies-api14.p.rapidapi.com/search',
    params: {
      query: query
    },
    headers: {
      'x-rapidapi-key': '0d63b418c8mshf52966f1fb50969p1f9921jsn78997aa5f6a3',
      'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchMovieData;
