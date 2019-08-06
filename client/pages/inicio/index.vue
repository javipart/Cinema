<template>
  <v-container>
    <v-layout wrap>
      <v-flex v-for="(movie,index) in movies" :key="index" xs12 md6 lg4 sm6>
        <cartelera id="cartelera" :movie="movie" :turn="turn"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import cartelera from "../../components/cartelera";
export default {
  middleware: "user",
  data() {
    return {
      movies: [],
      turn:[]
    };
  },
  components: {
    cartelera
  },
  mounted() {
    axios
      .get("http://192.168.43.252:3090/api/movie")
      .then(res => {
        console.log(res);
        this.movies = res.data;
      })
      .catch(err => {
        console.log(err.response);
      });
      axios
      .get("http://192.168.43.252:3090/api/turn")
      .then(res => {
        console.log(res);
        this.turn = res.data;
      })
      .catch(err => {
        console.log(err.response);
      });
  },
};
</script>

<style scoped>
#cartelera {
  margin-top: 15px;
}
</style>
