import React from 'react';
import MaterialTable from 'material-table';

const Gallery = () => {
  return (
    <div class="container-fluid">
      <div class="row tm-welcome-row">
        <div class="col-12">
          <div
            class="tm-welcome-parallax tm-center-child"
            data-parallax="scroll"
            data-image-src="img/blooming-bg.jpg"
          >
            <div class="tm-bg-black-transparent tm-parallax-overlay">
              <h2>Our Gallery</h2>
              <p>this is a parallax background image</p>
            </div>
          </div>
        </div>
      </div>

      <section class="row tm-pt-4">
        <div class="col-12 tm-page-cols-container">
          <div class="tm-page-col-left">
            <ul class="tabs clearfix filters-button-group">
              <li>
                <a href="#" class="active" data-filter="*">
                  <div class="tm-tab-icon"></div>
                  All Types
                </a>
              </li>
              <li>
                <a href="#" class="" data-filter=".category-1">
                  <div class="tm-tab-icon"></div>
                  First Category
                </a>
              </li>
              <li>
                <a href="#" class="" data-filter=".category-2">
                  <div class="tm-tab-icon"></div>
                  Second Type
                </a>
              </li>
              <li>
                <a href="#" class="" data-filter=".category-3">
                  <div class="tm-tab-icon"></div>
                  Third Category
                </a>
              </li>
            </ul>
          </div>
          <div class="tm-page-col-right">
            <div class="tm-gallery" id="tmGallery">
              <div class="tm-gallery-item category-1">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-01.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-2">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-02.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-1">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-03.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-3">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-04.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-2">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-05.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-3">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-06.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-3">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-07.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-1">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-08.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-2">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-09.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-3">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-10.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-2">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-11.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
              <div class="tm-gallery-item category-1">
                <figure class="effect-bubba">
                  <img
                    src="img/gallery/gallery-item-12.jpg"
                    alt="Gallery item"
                    class="img-fluid"
                  />
                  <figcaption>
                    <h2>Fresh <span>Bubba</span></h2>
                    <p>Bubba likes to appear out of thin air.</p>
                    <a href="#">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="row" id="tmCallToAction">
        <div class="col-12 tm-page-cols-container tm-call-to-action-col">
          <div class="tm-page-col-right">
            <div class="tm-call-to-action-box">
              <i class="fas fa-3x fa-rss-square tm-call-to-action-icon"></i>
              <div class="tm-call-to-action-text">
                <h3 class="tm-call-to-action-title">
                  Vivamus sollicitudin tellus
                </h3>
                <p class="tm-call-to-action-description">
                  Maecenas maximus tellus in dolor auctor tristique. Nam
                  hendrerit posuere laoreet. Aliquam erat volutpat. Nulla eros
                  est, imperdiet vel feugiat non, ullamcorper mattis nulla.
                </p>
                <form action="#" method="GET" class="tm-call-to-action-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="tm-email-input"
                    required
                  />
                  <button type="submit" class="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="row tm-page-footer">
        <p class="col-12 tm-copyright-text mb-0">
          Copyright &copy; 2019 Next Level Company... 
          
          Designed by Template Mo
        </p>
      </footer>

    </div>
  );
}

export default Gallery;