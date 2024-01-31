const axios = require('axios');
const API_KEY = process.env.TMDB_API_KEY;

const searchMovies = async (title) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&include_adult=false&language=en-US&region=US`
  );

  return response.data.results.slice(0, 10).map((result) => ({
    movie_id: result.id,
    title: result.title,
    poster_image_url: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
    popularity_summary: `${result.popularity} out of ${result.vote_count}`,
  }));
};

module.exports = {
  searchMovies,
};
