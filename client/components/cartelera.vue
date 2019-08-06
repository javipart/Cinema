<template>
  <v-card :loading="loading" max-width="374">
    <v-img
      height="250"
      :src="movie.img"
    ></v-img>

    <v-card-title>{{movie.title}}</v-card-title>
    <v-card-text>
      <v-layout align-center>
        <v-rating :value="movie.qualification" color="amber" half-increments dense size="14" readonly></v-rating>

        <div class="grey--text ml-4">{{movie.qualification}} ({{movie.quantity}})</div>
      </v-layout>

      <div class="my-4 subtitle-1 black--text">{{movie.title}}</div>

      <div>{{movie.description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <div class="title text--primary">Horas Disponibles</div>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <div v-for="(turn,index) in turn" :key="index">
          <v-chip @click="cambiar(turn._id)" v-if="turn.movie._id==movie._id" >{{turn.time}}</v-chip>
        </div>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple accent-4" text @click="reserve">Reservar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: ['movie','turn'],
  data: () => ({
    loading: false,
    selection: 0,
    hora_id:''
  }),
  methods: {
    ...mapMutations('pelicula',['movies']),
    reserve() {
      this.movies(this.hora_id);
      this.$router.push('/inicio/10');
    },
    cambiar(id){
      this.hora_id=id;
    }
  }
};
</script>