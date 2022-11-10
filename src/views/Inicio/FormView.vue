<template>
    <div>
      <v-data-table :headers="headers" @click:row="dialog = true" :items="Transcripciones" item-key="name"
        class="elevation-1" :search=search :custom-filter="filterOnlyCapsText">
        <template v-slot:top>
          <v-text-field v-model=search label="Buscar por id" class="mx-4"></v-text-field>
        </template>
        <template body append>
          <tr>
            <td></td>
            <td colspan="4"></td>
          </tr>
        </template>
      </v-data-table>
      <div class="text-center">
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              CARGANDO EDICIÓN TRANSCRIPCIÓN
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </template>
  <script lang="ts">
  import axios from "axios";
  
  export default {
  
    mounted(): void {
      this.getData();
    },
  
    data() {
      return {
        search: '',
        dialog: false,
        Transcripciones: [],
        
      }
    },
    methods: {
      filterOnlyCapsText(value, search, item) {
        return value != null &&
          search != null &&
          typeof value == 'number' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
      redirccionar() {
        this.$router.push('edit')
      },
  
      async getData() {
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "Content-Type": "application/json",
          "Authorization": "Basic dXN1YXJpbzE6dXN1YXJpbzE="
        }
        let reqOptions = {
          url: "http://localhost:9090/Transcripciones",
          method: "GET",
          headers: headersList,
        }
        let response = await axios.request(reqOptions);
        this.Transcripciones = JSON.parse(response.data)
        console.log(this.Transcripciones);
      }
    },
  
    watch: {
      dialog(val) {
        if (!val) return
        setTimeout(() => (this.dialog = false, this.$router.push('edit')), 4000)
      },
    },
    computed: {
      headers() {
        return [
          { text: 'Nombre del audio', value: 'AudioNombre' },
          { text: 'Asertividad', value: 'Confidence' },
          { text: 'Campañia', value: 'Campania' },
          { text: 'Cliente', value: 'Cliente' },
  
        ]
      },
    },
  }
  </script>
  <style>
  .body {
    background-color: #c0e9d5;
  }
  </style>