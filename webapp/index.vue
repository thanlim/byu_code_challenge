<template>
  <div>
    <input v-model="searchTerm" />
    <button @click="searchMovies">Search</button>
    <div v-for="movie in movies" :key="movie.movie_id">
      <h2>{{ movie.title }}</h2>
      <img :src="movie.poster_image_url" alt="Movie Poster" />
      <p>{{ movie.popularity_summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      movies: [],
    };
  },
  methods: {
    async searchMovies() {
      try {
        const response = await this.$axios.get(`/movies?search=${this.searchTerm}`);
        this.movies = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>