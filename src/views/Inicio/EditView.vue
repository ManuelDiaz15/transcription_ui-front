<template>
    <!-- Cuerpo de la Page -->
    <body class="color_back1_edit">
        <!-- Lo que esta haciendo el Container XL es centrar el div principal, abarcando width: 100%; margin-right: auto; margin-left: auto; -->
        <div class="container-xl containerxl_padding d-flex" >
         <div class="color_back2_edit">
            <div class="focused">
                <div class="color_top_edit">
                    <h4> ID: 001 Transcripción Call Center: Falabella. Ejecutivo: Jose Perez Fecha: 10/10/22 </h4>
                </div>
                <div class="row">
                <div class="col-6"> <!-- Inicio div para separar la pagina -->
                    <div class="" v-for="c in [1,2,3,4]" v-bind:key="c.id">
                <div class="linea"></div>
                <div class="focused color_speaker_edit1">
                  <div>
                       <!--  <v-img contain alt="Alloxentric Agent" src="@/assets/Agent.png" max-height="50"></v-img> --> 
                        <p class="p text-left"> <strong>Speaker0</strong></p> <!-- Se utiliza strong para dejar en negrita el texto -->
                        <p class="p text-left">
                            Thank you for calling ABC Company. My name is Ashley. How may I help you today?
                        </p>
                    </div>
                </div>
                 </div> 
                </div> <!-- Fin div para separar la pagina -->
                <div class="col-6"><!-- Inicio div para separar la pagina -->
                 <div class="" v-for="c in [1,2,3,4]" v-bind:key="c.id">
                <div class="linea"></div>
                <div class="focused color_speaker_edit1 rounded-xl">
                    <div class="form-group">
                       <!--  <v-img contain alt="Alloxentric Agent" src="@/assets/Agent.png" max-height="50"></v-img> --> 
                        <p class="p text-left"> <input placeholder="Speaker0"></p> <!-- Se utiliza strong para dejar en negrita el texto -->
                        <!-- la manera en la que se mantiene de ese tamaño es por el style que defini dentro del textarea -->
                        <textarea class="col-lg-12" name="comentario" rows="2" cols="40">Thank you for calling ABC Company. My name is Ashley. How may I help you today?</textarea>
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
          <button type="button" class="btn btn-outline-success">Guardar</button>
          </div>
          <audio controls>
            <source src="@/views/Inicio/FALBCSP_20220907-151705_56958208343_557_175429150-all.mp3" type="audio/ogg">
            <source src="@/views/Inicio/FALBCSP_20220907-151705_56958208343_557_175429150-all.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
           </audio> 
     </div>
    </div>
    </body>
  </template>
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
  