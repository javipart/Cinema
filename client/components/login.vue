<template>
  <v-content>
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field name="usuario" label="Usuario" type="text" v-model="email"></v-text-field>
                <v-text-field name="password" label="Contraseña" type="password" v-model="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn  tile outlined color="success" @click="registro">
                <v-icon left>mdi-pencil</v-icon>Registrarse
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="login" color="primary">Ingresar</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Swal from "sweetalert2";
export default {
  name: "login",
  data() {
    return {
      email: "javipart@gmail.com",
      password: "javi",
      cargando: "enviar",
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions("user", ["nuevoToken", "nuevoUsuario"]),
    login() {
      this.isLoading = true;
      axios
        .post("http://192.168.43.252:3090/api/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          this.nuevoToken(res.data.id);
          this.nuevoUsuario();
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err.response);
          this.isLoading = false;
          this.modal('Error','datos invalidad','error');
        })
        .then(function() {});
    },
    modal(titulo, mensaje, tipo) {
      Swal.fire(titulo, mensaje, tipo);
    },
    registro(){
      this.$router.push('/registro');
    }
  }
};
</script>

<style scoped>
</style>