<template>
  <v-layout wrap>
    <v-flex xs12 id="titulo">
      <h1>Seleccione silla</h1>
    </v-flex>
    <v-flex xs1 ></v-flex>
    <v-flex xs10 id="pantalla">
      <h1 id="titulo">Pantalla</h1>
    </v-flex>
    <v-flex xs1></v-flex>

    <v-flex xs12 id="pantalla">
      <sillas/>
    </v-flex>
  </v-layout>
</template>

<script>
import sillas from "../../components/sillas"
import {mapGetters} from 'vuex'
export default {
  mounted(){
    console.log(this.movieId);
  },
  components:{
    sillas
  },
  computed:{
    ...mapGetters('pelicula',['movieId']),
  }
};
</script>


<style scoped>
#titulo {
  text-align: center;
}
#pantalla{
    background-color: black;
    color: white;
}
</style>
