<template>
  <div>
    <h2>{{ message }}</h2>
    <v-data-table :headers="headers" @click:row="dialog = true" :items="desserts" item-key="name" class="elevation-1" :search=search :custom-filter="filterOnlyCapsText" >
      <template v-slot:top>
        <v-text-field v-model=search label="Buscar por id" class="mx-4"></v-text-field>
      </template>
      <template body append>
        <tr>
        <td ></td>
        <td colspan="4" ></td>
        </tr>
      </template>
    </v-data-table>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            CARGANDO EDICIÓN TRANSCRIPCIÓN
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script lang="ts">
  export default  {

    data () {
      return {
        search: '',
        dialog: false, /* nuevooooooooooooooooooooooooooooooooooooo */
        desserts: [
          {
            id: 1,
            Acertividad: '20%',
            callcenter: 'Falabella',
            ejecutivo: 'Denis Rivas',
            estado: 'pendiente',
            fecha: '25/08/2022',
          },
          {
            id: 2,
            Acertividad: '20%',
            callcenter: 'Cobro',
            ejecutivo: 'Hugo Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 3,
            Acertividad: '25%',
            callcenter: 'Cobro',
            ejecutivo: 'Pedro Pinto',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 4,
            Acertividad: '30%',
            callcenter: 'Ripley',
            ejecutivo: 'Lucas Paredes',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 5,
            Acertividad: '33%',
            callcenter: 'Falabella',
            ejecutivo: 'Mateo Gonzales',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 6,
            Acertividad: '37%',
            callcenter: 'Cobro',
            ejecutivo: 'Daniel Vidal',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 7,
            Acertividad: '37%',
            callcenter: 'Cobro',
            ejecutivo: 'Marco Faundes',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 8,
            Acertividad: '37%',
            callcenter: 'Ripley',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 9,
            Acertividad: '38%',
            callcenter: 'Falabella',
            ejecutivo: 'Bruno Diaz',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 10,
            Acertividad: '40%',
            callcenter: 'Falabella',
            ejecutivo: 'Sergio Mancilla',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
        ],
      }
    }, /* a qui puse lo del dialog */
    watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false, this.$router.push('edit') ), 4000)
      
      },
    },
    computed: {
      headers () {
        return [
          {
            text: 'ID transcripción',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Acertividad', value: 'Acertividad' },
          { text: 'Callcenter', value: 'callcenter' },
          { text: 'Ejecutivo', value: 'ejecutivo' },
          { text: 'Estado', value: 'estado' },
          { text: 'Fecha', value: 'fecha' },
        ]
      },
    },
    
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value == 'number' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
      redirccionar (){
        this.$router.push('edit')
      }
    },
  }
  
</script>
<style>
  .body{
      background-color: #c0e9d5;
  }
</style>