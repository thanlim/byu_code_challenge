const express = require('express');
const tmdbService = require('./tmdbService');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/movies', async (req, res) => {
  try {
    const { search } = req.query;
    const movies = await tmdbService.searchMovies(search);
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
