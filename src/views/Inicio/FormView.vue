<template>
    <div class>
        <v-container>
            <h1>hola</h1>
            <v-form @submit.prevent="getData()">
                <v-text-field v-model= "hablante1" :counter="30" label="Hablante N° 1"></v-text-field>
                <v-text-field v-model= "hablante2" :counter="30" label="Hablante N° 2"></v-text-field>
                <v-text-field v-model= "compañia" :counter="30" label="Nombre de la compañia"></v-text-field>
                <v-text-field v-model= "porcentajeAcertividad" :counter="30" label="Porcentaje de acertividad (numero entre el 1 al 100)"></v-text-field>
                <v-text-field v-model= "frace1" :counter="30" label="Frace del hablante 1"></v-text-field>
                <v-text-field v-model= "frace2" :counter="30" label="Frace del hablante 2"></v-text-field>
                <v-btn color="success" class="mr-4" type="submit">Enviar Registro</v-btn>
                <v-btn color="error" class="mr-4">Limpiar</v-btn>
            </v-form>
        </v-container>
    </div>
</template>
<script lang="ts" >
    import axios from 'axios'
	import { Component, Vue } from 'vue-property-decorator';
	import { internet } from '@/utils/Internet';
	import { AxiosResponse } from 'axios';
	import Util from '@/utils/Util';


@Component({
	name: 'UserView',
})

export default class UserView extends Vue {
    public isLoading = false;
    public hablante1 = null;
    public hablante2 = null;
    public compañia = null;
    public porcentajeAcertividad = null;
    public frace1 = null;
    public frace2 = null;

    data(){
        return{
            atributos:{
                hablante1: null,
                hablante2: null,
                compañia: null,
                porcentajeAcertividad: null,
                frace1: null,
                frace2: null
            }
        }
    }   
        getData(){
            axios({
                method:'post',
                url:'/save',
                data:{
                    hablante1: this.hablante1,
                    hablante2: this.hablante2,
                    compañia: this.compañia,
                    porcentajeAcertividad: this.porcentajeAcertividad,
                    frace1: this.frace1,
                    frace2: this.frace2
                }
            }
            )
        }
    } 
</script>