import React from 'react';

const Home = () => {
  return (
    <div class="container-fluid">
    <div class="row tm-brand-row">
      <div class="col-lg-4 col-10">
        <div class="tm-brand-container">
          <div class="tm-brand-texts">
            <h1 class="text-uppercase tm-brand-name">Diagnostico Belgrano </h1>
          </div>
        </div>
      </div>
      </div>

      <div class="row tm-welcome-row">
        <div class="col-12 tm-page-cols-container">
          <div class="tm-page-col-left tm-welcome-box tm-bg-primary">
            <p class="tm-welcome-text">
              <em>"La salud de nuestros pacientes es nuestra prioridad."</em>
            </p>
          </div>
          <div class="tm-page-col-right">
            <div
              class="tm-welcome-parallax"
              data-parallax="scroll"
              data-image-src="img/hero.jpg"
            ></div>
          </div>
        </div>
      </div>

      <div class="row tm-pt-4 tm-pb-6">
        <div class="col-12 tm-page-cols-container">
          <div class="tm-page-col-right">
            <h2 class="tm-text-secondary tm-mb-5">
            Somos Diagnostico Belgrano </h2>
            <p class="tm-mb-6">
             Somos un grupo de médicos amigos que nos unimos con el sueño de crear una institución médica confiable con objetivos de excelencia. Tomamos la decisión de realizar una actividad asistencial apoyada en la ciencia, calidad y en la calidez humana.
              
            </p>
          </div>
        </div>
      </div>

      <div class="tm-page-col-right">
        <div class="row tm-pt-7 tm-pb-6">
          <div class="col-md-6 tm-home-section-2-left">
            <div
              class="img-fluid tm-mb-4 tm-small-parallax"
              data-parallax="scroll"
              data-image-src="img/eorders.jpg"></div>
            <div>
              <h3 class="tm-text-secondary tm-mb-4">
                Consultas virtuales
              </h3>
              <p class="tm-mb-5">
                En estos tiempos de incertidumbre, estamos mas cerca de quienes mas lo necesitan.
              </p>
              <ul class="tm-list-plus">
                <li>Consultas virtuales</li>
                <li>Recetas virtuales</li>
                <li>Seguridad para tus seres queridos</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 tm-home-section-2-right">
            <div
              class="img-fluid tm-mb-4 tm-small-parallax"
              data-parallax="scroll"
              data-image-src="img/coronavirus.jpg"></div>
            <div>
              <h3 class="tm-text-secondary tm-mb-4">
                COVID-19
              </h3>
              <p class="tm-section-2-text">
                Realizamos test de detección de <strong>Anticuerpos</strong> y <strong>PCR</strong>. 
              </p>
              <p>
                El coronavirus, que causa la pandemia mundial, pertenece a una familia de virus (Cov). Los virus de esta familia pueden causar desde resfriados comunes hasta enfermedades más graves, como el síndrome respiratorio agudo severo (SARS) y el síndrome respiratorio del Medio Oriente (Mers). El nuevo coronavirus fue nombrado SARS-COV-2 por la Organización Mundial de la Salud (OMS) y la enfermedad que causa se llama COVID-19.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row" id="tmCallToAction">
        <div class="col-12 tm-page-cols-container tm-call-to-action-col">
          <div class="tm-page-col-right">
            <div class="tm-call-to-action-box">
              <i class="fas fa-3x fa-rss-square tm-call-to-action-icon"></i>
              <div class="tm-call-to-action-text">
                <h3 class="tm-call-to-action-title">
                  Mantenerme informado
                </h3>
                <p class="tm-call-to-action-description">
                  Adhierase a nuestro newsletter para recibir las ultimas novedades.
                </p>
                <form action="#" method="GET" class="tm-call-to-action-form">
                  <input type="email" name="email" placeholder="Correo Electronico" class="tm-email-input" required />
                  <button type="submit" class="btn btn-primary">
                    Subscribir
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="row tm-page-footer">
        <p class="col-12 tm-copyright-text mb-0">
        Copyright &copy; 2020 Diagnostico Belgrano </p>
      </footer>
      
    </div>
  );
}

export default Home;