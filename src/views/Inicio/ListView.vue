<template>
  <div>
    <h2>{{ message }}</h2>
    <v-data-table :headers="headers" :items="desserts" item-key="name" class="elevation-1" :search=search :custom-filter="filterOnlyCapsText" >
      <template v-slot:top>
        <v-text-field v-model=search label="Buscar por id" class="mx-4"></v-text-field>
        <v-btn @click="redirccionar()">Editar</v-btn>
      </template>
      <template body append>
        <tr>
        <td ></td>
        <td colspan="4" ></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
  export default  {

    data () {
      return {
        search: '',
        desserts: [
          {
            id: 1,
            Acertividad: '20%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 2,
            Acertividad: '20%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 3,
            Acertividad: '25%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 4,
            Acertividad: '300%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 5,
            Acertividad: '33%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 6,
            Acertividad: '37%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 7,
            Acertividad: '37%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 8,
            Acertividad: '37%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 9,
            Acertividad: '38%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
          {
            id: 10,
            Acertividad: '40%',
            callcenter: 'Falabella',
            ejecutivo: 'Jose Perez',
            estado: 'pendiente',
            fecha: '10/12/22',
          },
        ],
      }
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