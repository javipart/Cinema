<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn color="green" @click="logaut" v-if="islogin">
        salir
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  data() {
    return {
      fixed: false,
      title: "Cinespia"
    };
  },
  methods:{
    ...mapActions('user',['salir']),
    logaut(){
      this.salir();
    }
  },
  computed:{
    ...mapGetters('user',['islogin'])
  }
};
</script>
