<template>
    <!-- Cuerpo de la Page -->
    <body class="color_back1_edit">
        <!-- Lo que esta haciendo el Container XL es centrar el div principal, abarcando width: 100%; margin-right: auto; margin-left: auto; -->
        <div class="containerxl_padding d-flex" >
         <div class="color_back2_edit">
            <div class="focused">
                <div class="color_top_edit">
                    <h4> ID: 001 Transcripción Call Center: Ripley. Ejecutivo: Felipe Morales Fecha: 25/08/2022 </h4>
                </div>
                <div class="row">
                <div class="col-6"> <!-- Inicio div para separar la pagina -->
                    <div class="" v-for="lista in listar" v-bind:key="lista">
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                  <div>
                       <!--  <v-img contain alt="Alloxentric Agent" src="@/assets/Agent.png" max-height="50"></v-img> --> 
                        <p class="p text-left"> Speaker : <strong>{{ lista.speaker }}</strong></p> <!-- Se utiliza strong para dejar en negrita el texto -->
                        <p class="p text-left">{{ lista.transcript }}</p>
                            
                    </div>
                </div>
                 </div> 
                </div> <!-- Fin div para separar la pagina -->
                <div class="col-6"><!-- Inicio div para separar la pagina -->
                 <div class="" v-for="Edit in editar" v-bind:key="Edit">
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                    <div>
                        <p class="p text-left"> Speaker : <input v-model="Edit.speaker"></p> 
                        <textarea class="col-10" name="comentario" rows="2" cols="40"  v-model="Edit.transcript"></textarea>
                    </div>
                </div>
                 </div> 
                </div> <!-- div para separar la pagina -->
                </div>
            </div> 
        </div>
      <div class="mx-3">
         <div class="btn_guardar">
          <h3>Guardar Transcripción</h3>
          <button type="button" class="btn btn-outline-success" @click ="dialog = true">Guardar</button>
          </div>
          <audio controls>
            <!-- <source src="@/views/Inicio/FALBCSP_20220907-151705_56958208343_557_175429150-all.mp3" type="audio/ogg">
            <source src="@/views/Inicio/FALBCSP_20220907-151705_56958208343_557_175429150-all.mp3" type="audio/mpeg"> -->
            Your browser does not support the audio element.
           </audio> 
           <div>
            <v-app id="inspire">
                <v-row justify="center">
                <v-dialog
                    v-model="dialog"
                    max-width="290"
                >
                    <v-card>
                    <v-card-title class="text-h5">
                        GUARDAR CAMBIOS?
                    </v-card-title>
            
                    <v-card-text>
                        RECUERDA QUE SI GUARDAS LOS CAMBIOS SE ALMACENARAN DOS DOCUMENTOS UNO CON Y SIN TU CORRECCIÓN
                    </v-card-text>
            
                    <v-card-actions>
                        <v-spacer></v-spacer>
            
                        <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                        >
                        CANCELAR
                        </v-btn>
            
                        <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false, loadpage = true"
                        >
                        GUARDAR
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-row>
            </v-app>
            </div>
            <div class="text-center">
                <v-dialog
                    v-model="loadpage"
                    hide-overlay
                    persistent
                    width="300"
                >
                    <v-card
                    color="primary"
                    dark
                    >
                    <v-card-text>
                        GUARDANDO EDICIÓN
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
    </div>
    </body>
  </template>
  <script>
  import { Component, Vue } from 'vue-property-decorator';
  export default {
    data () {
            return{
            dialog: false,
            loadpage: false,
            listar: [
            {
            speaker: 0,
            transcript: "Podría, por favor, con don Alexis As Man,"
            },
            {
            speaker: 0,
            transcript: "Sí con él."
            },
            {
            speaker: 0,
            transcript: "Buen día, Alexis."
            },
            {
            speaker: 0,
            transcript: "Mi nombre es de, y le estoy llamando de la empresa cobro que fueran en cargo de Banco Fa,"
            },
            {
            speaker: 0,
            transcript: "para seguridad llamada podría estar siendo grabada."
            },
            {
            speaker: 0,
            transcript: "Es una deuda que tiene con un crédito de consumo"
            },
            {
            speaker: 0,
            transcript: "de empleados"
            },
            {
            speaker: 0,
            transcript: "de rest de este año, queremos saber lo usted algunas opciones de pago para hacer de alexis y el motivo por el que no había podido hacerlo, que estuvo que"
            },
            {
            speaker: 0,
            transcript: "endeudamiento, licencia, baja?"
            },
            {
            speaker: 0,
            transcript: "No, que se salta de octubre,"
            },
            {
            speaker: 0,
            transcript: "que tanto de decir. Octubre pagué lo máximo el último de febrero"
            },
            {
            speaker: 0,
            transcript: "me acuerdo la última que pagué, total."
            },
            {
            speaker: 0,
            transcript: "Ok, explico. El sistema tiene que salir,"
            },
            {
            speaker: 0,
            transcript: "Ok, le explico, a la fecha el monto de la deuda,"
            },
            {
            speaker: 0,
            transcript: "se un solo monto,"
            },
            {
            speaker: 0,
            transcript: "ya le acelerar las cuotas y este los cuatro millones quinientos cincuenta mil cuatrocientos diecinueve. Este monto originalmente"
            },
            {
            speaker: 0,
            transcript: "está sobre los casi cinco millones, dice un descuento"
            },
            {
            speaker: 0,
            transcript: "de casi quinientos mil quedando en cuatro mil"
            },
            {
            speaker: 0,
            transcript: "espéreme un poquito ver, por favor."
            }],
            editar: [
            {
            speaker: 0,
            transcript: "Podría, por favor, con don Alexis As Man,"
            },
            {
            speaker: 0,
            transcript: "Sí con él."
            },
            {
            speaker: 0,
            transcript: "Buen día, Alexis."
            },
            {
            speaker: 0,
            transcript: "Mi nombre es de, y le estoy llamando de la empresa cobro que fueran en cargo de Banco Fa,"
            },
            {
            speaker: 0,
            transcript: "para seguridad llamada podría estar siendo grabada."
            },
            {
            speaker: 0,
            transcript: "Es una deuda que tiene con un crédito de consumo"
            },
            {
            speaker: 0,
            transcript: "de empleados"
            },
            {
            speaker: 0,
            transcript: "de rest de este año, queremos saber lo usted algunas opciones de pago para hacer de alexis y el motivo por el que no había podido hacerlo, que estuvo que"
            },
            {
            speaker: 0,
            transcript: "endeudamiento, licencia, baja?"
            },
            {
            speaker: 0,
            transcript: "No, que se salta de octubre,"
            },
            {
            speaker: 0,
            transcript: "que tanto de decir. Octubre pagué lo máximo el último de febrero"
            },
            {
            speaker: 0,
            transcript: "me acuerdo la última que pagué, total."
            },
            {
            speaker: 0,
            transcript: "Ok, explico. El sistema tiene que salir,"
            },
            {
            speaker: 0,
            transcript: "Ok, le explico, a la fecha el monto de la deuda,"
            },
            {
            speaker: 0,
            transcript: "se un solo monto,"
            },
            {
            speaker: 0,
            transcript: "ya le acelerar las cuotas y este los cuatro millones quinientos cincuenta mil cuatrocientos diecinueve. Este monto originalmente"
            },
            {
            speaker: 0,
            transcript: "está sobre los casi cinco millones, dice un descuento"
            },
            {
            speaker: 0,
            transcript: "de casi quinientos mil quedando en cuatro mil"
            },
            {
            speaker: 0,
            transcript: "espéreme un poquito ver, por favor."
            }

            ]}
       },
       watch: {
        loadpage (val) {
        if (!val) return

        setTimeout(() => (this.loadpage = false, this.$router.push('List') ), 4000)
        
        },
        }

  }
 
  </script>
  <style>
  textarea{
    /* background-color: white; */
    border: 1px; 
    padding:0px;
    margin:0px;
    overflow: hidden; 
 }
/*    Padding que separa los dos colores en TOP */
  .containerxl_padding{
      padding: 15px;
  }
  /* Input donde se edita la transcripción*/
  .input-inferior input{
      padding: 10px;
      margin: auto;
      width: 100%;
      border-radius: 15px;
      font-size: 16px;
      background: #1d67cd;
  }
  .btn_guardar{
      padding: 10px;
      margin: auto;
      width: 100%;
      font-size: 16px;
      background: #1dcdbb;
  }
  /* ID, CALL CENTER, AGENT, DATE */
  .color_top_edit {
      background: #e8e6e6;
      padding: 12px;
      padding-bottom: 5px;
      border-radius: 15px;
  }
  /* Color secundario de la Page*/
  .color_back2_edit{
      background: #78ecd5;
  }
  /* Color principal de la Page*/
  .color_back1_edit{
      background: #abf8e5;
  }
  /* Padding encargado de centrar los div más pequeños */
  .focused{
      padding: 17px;
  }
  /* Color de los div que encierran a los Agent and Customer*/
  .color_speaker_edit1{
      background: #48a5d1;
  }
  /* Linea que separa los Agent de Customer */
  .linea {
      border-top: 2px solid rgb(191, 245, 229);
      height: 2px;
      padding: 0;
      margin: 40px auto 0 auto;
      margin-bottom: 40px;
      overflow: auto;
  }
  ::placeholder {
      /* Se aplica específicamente al texto del placeholder */
      color: white;
  }
  
  
  </style>