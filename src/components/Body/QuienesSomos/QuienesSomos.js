import React from "react";
import Novedades from "./Novedades/Novedades";

const QuienesSomos = () => (

<section class="row tm-pt-4 tm-pb-6">
  <div class="col-12 tm-page-cols-container">
    <div class="tm-page-col-right">
      <h2 class="tm-text-secondary tm-mb-5">
      Somos Diagnostico Belgrano </h2>
      <p class="tm-mb-6">
       Somos un grupo de médicos amigos que nos unimos con el sueño de crear una institución médica confiable con objetivos de excelencia. Tomamos la decisión de realizar una actividad asistencial apoyada en la ciencia, calidad y en la calidez humana.
        
      </p>
    </div>
  </div>
  <section class="tm-page-col-right">
    <Novedades/>
  </section>
</section>

);

export default QuienesSomos;