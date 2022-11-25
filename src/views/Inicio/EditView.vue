<template>
    <!-- Cuerpo de la Page -->
    <body class="color_back1_edit">
        <!-- Lo que esta haciendo el Container XL es centrar el div principal, abarcando width: 100%; margin-right: auto; margin-left: auto; -->
        <div class="containerxl_padding d-flex">
            <div class="color_back2_edit">
                <div class="focused">
                    <div class="color_top_edit">
                        <h4 class="font">{{Medit13}} {{ Ejecutivo }}</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <!-- Inicio div para separar la pagina -->
                            <div class="linea"></div>
                            <h3 class="font" style="text-align: center;">{{ Medit1 }}</h3>
                            <div class="" v-for="lista in TR_origin" v-bind:key="lista">
                                <div class="linea"></div>
                                <div class="focused color_speaker_edit2">
                                    <div class="">
                                        <!--<v-img id="foto" contain alt="Alloxentric Agent" src="@/assets/Agent.png"> </v-img>
                        <v-img id="foto2" contain alt="Alloxentric Padlock" src="@/assets/locked-padlock.png"> </v-img> -->
                                        <p class="p text-left font"> {{ Medit6 }} : <strong>{{ lista.speaker }}</strong>
                                            {{ Medit7 }} :
                                            <a class="p text-left" @click="timeselect(lista.start)"> <strong>
                                                    {{ lista.start }}
                                                </strong></a>
                                            <v-btn icon color="pink" @click="Pause()">
                                                <v-icon>mdi-pause</v-icon>
                                            </v-btn>
                                        </p>
                                        <!-- <a @click="Pause()"><strong>STOP</strong></a> -->
                                        <!-- Se utiliza strong para dejar en negrita el texto -->
                                        <p class="p text-left font">{{ lista.transcript }}</p>
                                        <div class="linea2"></div>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- Fin div para separar la pagina -->
                        <div class="col-6">
                            <!-- Inicio div para separar la pagina -->
                            <div class="linea"></div>
                            <h3 class="font" style="text-align: center;">{{ Medit2 }}</h3>
                            <div class="" v-for="Edit in TR_modifi" v-bind:key="Edit">
                                <div class="linea"></div>
                                <div class="focused color_speaker_edit1">
                                    <div>
                                        <p class="p text-left font "> {{ Medit6 }} : <input size="1"
                                                v-model="Edit.speaker">
                                                {{ Medit7 }}: <input size="5"
                                                v-model="Edit.start">
                                                <v-btn
                                                    icon
                                                    color="Black"
                                                    @click="split(TR_modifi.indexOf(Edit))"
                                                >
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn> <!-- [TR_modifi.indexOf(Edit)] -->
                                                <v-btn
                                                    icon
                                                    color="Black"
                                                    @click="TR_modifi.splice(TR_modifi.indexOf(Edit),1)"
                                                >
                                                    <v-icon>mdi-minus</v-icon>
                                                </v-btn> 
                                        </p>
                                        <v-textarea class="col-10 p-1" @input="resize($event)" name="comentario"
                                            rows="2" cols="40" auto-grow v-model="Edit.transcript"></v-textarea>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- div para separar la pagina -->
                    </div>
                </div>
            </div>
            <div class="mx-3">
                <div class="btn_guardar">
                    <h3 class="font">{{ Medit3 }}</h3>
                    <!--  <button type="button" class="btn btn-lg btn-secundary" @click ="dialog = true">Guardar</button> -->
                    <v-btn block elevation="10" large rounded type="button" @click="dialog = true, rellenar()">{{ Medit4
                    }}
                    </v-btn>
                </div>
                <div class="btn_box_media">
                    <h3 class="font">{{ Medit5 }}</h3>
                    <audio controls id="audioTranscript" >
                        <source :src="`http://localhost:9090/audio?Ruta=${ruta_audio}`" />
                    </audio>
                </div>
                <div>
                    <v-row justify="center">
                        <v-dialog v-model="dialog" max-width="300">
                            <v-card>
                                <v-card-title class="text-h5 font">
                                    {{ Medit8 }}
                                </v-card-title>
                                <v-card-text class="font">
                                    {{ Medit9 }}
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn class="font" color="green darken-1" text @click="dialog = false">
                                        {{ Medit10 }}
                                    </v-btn>
                                    <v-btn color="green darken-1" text
                                        @click="Recarga = true, dialog = false, redirecionar()">
                                        {{ Medit11 }}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </div>
                <div class="text-center">
                    <v-dialog v-model="Recarga" hide-overlay persistent width="300">
                        <v-card color="primary" dark>
                            <v-card-text class="font">
                                {{ Medit12 }}
                                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
        </div>
    </body>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from "axios";
import { TranscriptAll } from '@/model/EditView/Edit';
@Component({
    name: 'EditView',
})
export default class EditView extends Vue {
    public Medit1 = this.$t("Edit.Medit1");
    public Medit2 = this.$t("Edit.Medit2");
    public Medit3 = this.$t("Edit.Medit3");
    public Medit4 = this.$t("Edit.Medit4");
    public Medit5 = this.$t("Edit.Medit5");
    public Medit6 = this.$t("Edit.Medit6");
    public Medit7 = this.$t("Edit.Medit7");
    public Medit8 = this.$t("Edit.Medit8");
    public Medit9 = this.$t("Edit.Medit9");
    public Medit10 = this.$t("Edit.Medit10");
    public Medit11 = this.$t("Edit.Medit11");
    public Medit12 = this.$t("Edit.Medit12");
    public Medit13 = this.$t("Edit.Medit13");
    public TR_origin = [];
    public TR_modifi = [];
    public TR_save = [];
    public TR_ALL: TranscriptAll[] = [];
    public ruta_audio = '';
    public dialog = false;
    public Recarga = false;
    public NombreAudio = "";
    public Ejecutivo = "";
    mounted(): void {
        this.getdata();
        this.Leerdata();
        this.ruta_audio = localStorage.NombreAudio
    }
    Leerdata() {
        this.NombreAudio = localStorage.NombreAudio
        this.Ejecutivo = localStorage.Ejecutivo
    }
    async getdata() {
        let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": "Basic dXN1YXJpbzE6dXN1YXJpbzE=" 
        }
        let bodyContent = JSON.stringify({"AudioNombre":  localStorage.NombreAudio });
        let reqOptions = {
        url: "http://localhost:9090/Coreccion",
        method: "POST",
        headers: headersList,
        data: bodyContent,
        }
        let response = await axios.request(reqOptions);
        let rest = await axios.request(reqOptions);
        console.log(response.data);
        this.TR_origin = response.data
        this.TR_modifi = rest.data;
    }
    async savedata() {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": "Basic dXN1YXJpbzE6dXN1YXJpbzE="
        }
        let bodyContent = {
            AudioNombre: localStorage.NombreAudio,
            TranscritoChat: this.TR_ALL["TranscritoChat"],
        };
        let reqOptions = {
            url: "http://localhost:9090/Transcripciones_modif",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        let response = await axios.request(reqOptions);
        console.log(response.data);
    }
    rellenar() {
        this.TR_ALL['TranscritoChat'] = this.TR_modifi
        console.log(this.TR_ALL)
    }
    redirecionar() {
        setTimeout(() => (this.Recarga = false, this.$router.push('List')), 2000)
        this.savedata()
    }
    resize(e) {
        e.target.style.height = '10px'
        e.target.style.height = `${e.target.scrollHeight}px`
    }
    timeselect(time) {
        var audio = document.getElementById("audioTranscript")
        audio.currentTime = time;
        audio.play();
    }
    Pause() {
        var audio = document.getElementById("audioTranscript")
        audio.pause()
    }
    split(Edit){
        this.TR_modifi.splice(Number(Edit)+1,0,{"end":0,"speaker":0,"start":0,"transcript":""})
    }
}
</script>
<style>
textarea {
    /* background-color: white; */
    border: 1px;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    height: 34px;
    font-family: Nunito;
}
#foto {
    max-width: 10%;
    height: auto;
    margin: 20px;
    padding: 5px;
    display: inline-block;
    margin: auto;
}
#foto2 {
    max-width: 10%;
    height: auto;
    margin: 20px;
    margin-left: 30%;
    padding: 5px;
    display: inline-block;
    margin: auto;
}
.font {
    font-family: Nunito;
}
/*    Padding que separa los dos colores en TOP */
.containerxl_padding {
    padding: 15px;
}
/* Input donde se edita la transcripción*/
.input-inferior input {
    padding: 10px;
    margin: auto;
    width: 100%;
    border-radius: 15px;
    font-size: 16px;
    background: #1d67cd;
}
.btn_guardar {
    border-radius: 5%;
    padding: 10px;
    margin: auto;
    width: 100%;
    font-size: 16px;
    background: #78ecd5;
    box-shadow: 5px 5px 5px 5px #555555;
}
.btn_box_media {
    border-radius: 5%;
    padding: 10px;
    margin-top: 8%;
    width: 100%;
    font-size: 16px;
    background: #78ecd5;
    box-shadow: 5px 5px 5px 5px #555555;
}
/* ID, CALL CENTER, AGENT, DATE */
.color_top_edit {
    background: #e8e6e6;
    padding: 12px;
    padding-bottom: 5px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 5px 5px 5px 5px #888888;
}
/* Color secundario de la Page*/
.color_back2_edit {
    background: #F9F9F9;
}
/* Color principal de la Page*/
.color_back1_edit {
    background: #F9F9F9;
}
/* Padding encargado de centrar los div más pequeños */
.focused {
    padding: 17px;
}
/* Color de los div que encierran a los Agent and Customer*/
.color_speaker_edit1 {
    background: #F9F9F9;
    box-shadow: 5px 5px 5px 5px #555555;
    border-radius: 5%;
}
.color_speaker_edit2 {
    background: #d9d9d9;
    box-shadow: 5px 5px 5px 5px #555555;
    border-radius: 5%;
}
/* Linea que separa los Agent de Customer */
.linea {
    border-top: 2px solid #FAF7F0;
    height: 2px;
    padding: 0;
    margin: 40px auto 0 auto;
    overflow: auto;
}
.linea2 {
    border-top: 2px solid #e8e6e6;
    margin-bottom: 5%;
}
::placeholder {
    /* Se aplica específicamente al texto del placeholder */
    color: white;
}
</style>