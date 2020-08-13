import React from "react";

const Newsletter = () => (
    <section class="row" id="tmCallToAction">
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
  </section>
);

export default Newsletter;