<template>
    <ul>
        <li v-for="Edit in Transcripciones" v-bind:key="Edit">
            Numero hablante {{ Edit }}
        </li>
    </ul>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from "axios";

@Component({
    name: 'Lista'
})
export default class lista extends Vue {
    public Transcripciones: [];

    mounted(): void {
        this.getData();
    }
    data() {
        return {
            search: '',
            dialog: false,
            Transcripciones: []
        }
    }
    resize(e) {
        e.target.style.height = '10px'
        e.target.style.height = `${e.target.scrollHeight}px`
    }
    async getData() {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
            "Authorization": "Basic dXN1YXJpbzE6dXN1YXJpbzE="
        }
        let reqOptions = {
            url: "http://localhost:9090/Coreccion",
            method: "GET",
            headers: headersList,
        }
        let response = await axios.request(reqOptions);
        this.Transcripciones = JSON.parse(response.data)
        console.log(Object.values(this.Transcripciones.filter));
    }
}
</script>
<style>
.body {
    background-color: #c0e9d5;
}
</style>