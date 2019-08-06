<template>
  <div>
    <v-simple-table dense>
      <thead></thead>
      <tbody>
        <tr v-for="(item,index) in sillas" :key="index">
          <td v-for="silla in item.sillas" :key="silla">
            <v-btn
              @click="dialog_activar(item.fila,silla)"
              color="green"
              v-if="prueba(item.fila+silla)"
              id="silla"
            >{{item.fila}}{{silla}}</v-btn>
            <v-btn color="red" id="silla" v-else>{{item.fila}}{{silla}}</v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Apartar silla {{fila}}{{silla}}</v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field  v-model="Datacupon" label="tienes un cupun ? "></v-text-field>
                <v-btn @click="cupon" color="orange lighten-5">cargar cupon</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <h3>valor = 6000</h3>
          <br/>
          <h3>valor final {{6000-descuento}}</h3>
          <small>*despues de apartada no habra modificaciones</small>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red" text @click="dialog = false">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="reservar">Apartar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      sillas: [
        { fila: "A", sillas: 14 },
        { fila: "B", sillas: 14 },
        { fila: "C", sillas: 14 },
        { fila: "D", sillas: 14 },
        { fila: "E", sillas: 14 },
        { fila: "F", sillas: 14 },
        { fila: "G", sillas: 14 }
      ],
      dialog: false,
      silla: "",
      fila: "",
      ocupadas: [],
      Datacupon: "",
      error:'',
      descuento:0
    };
  },
  mounted() {
    this.inicio();
  },
  methods: {
    prueba(silla) {
      for (var data in this.ocupadas) {
        if (silla == this.ocupadas[data]) {
          return false;
        }
      }
      return true;
    },
    dialog_activar(fila, silla) {
      this.silla = silla;
      this.fila = fila;
      this.dialog = true;
    },
    reservar() {
      axios
        .post("http://192.168.43.252:3090/api/chair", {
          number: this.silla,
          row: this.fila,
          turn: this.movieId
        })
        .then(res => {
          console.log(res.data);
          this.modal("Correcto", "silla asignada correctamente", "success");
          this.inicio();
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err.response);
          this.isLoading = false;
          this.modal("Error", "datos invalidad", "error");
        })
        .then(function() {});
      this.dialog = false;
    },
    modal(titulo, mensaje, tipo) {
      Swal.fire(titulo, mensaje, tipo);
    },
    inicio() {
      axios
        .post("http://192.168.43.252:3090/api/chairs", {
          id: this.movieId
        })
        .then(res => {
          console.log(res.data);
          this.ocupadas = res.data.idTurns;
        })
        .catch(err => {
          console.log(err.response);
          this.isLoading = false;
        })
        .then(function() {});
      this.dialog = false;
    },
    cupon() {
      axios
        .post("http://192.168.43.252:3090/api/coupon", {
          code:this.Datacupon
        })
        .then(res => {
          if(res.data.status=="error"){
            this.modal("Error", "datos invalidad", "error");
          }else{
            this.modal("cargado", "cupon cargada", "success");
            this.descuento=res.data.discount;
          }
          
        })
        .catch(err => {
          console.log('error');
          console.log(err.response);
        })
        .then(function() {});
    }
  },
  computed: {
    ...mapGetters("pelicula", ["movieId"])
  }
};
</script>

<style>
#silla {
  margin: 2px;
}
</style>
