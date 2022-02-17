import React from "react";

import "../../content/css/main.css";
import "../../content/css/vendor.css";
import "../../content/css/base.css";
import backGround from "../../content/images/home-bg.jpg";
import welcomePic from "../../content/images/welcome-gift.jpg";

function Home() {
  return (
    <section
      id="home"
      data-parallax="scroll"
      data-image-src={backGround}
      data-natural-width={3000}
      data-natural-height={2000}
    >
      <div className="home-content">
        <div className="row contents">
          <div className="home-content-left">
            <h3 data-aos="fade-up">Bem-Vindo ao Neo.</h3>
            <h1 data-aos="fade-up">
              Parabéns João Paulo <br /> Você foi selecionado <br /> Para
              experimentar <br /> Um novo Café
            </h1>
            <div className="buttons" data-aos="fade-up">
              <a href="#download" className="smoothscroll button stroke">
                <span className="icon-circle-down" aria-hidden="true"></span>{" "}
                Cadastre-se
              </a>
              <a
                href="#pricing"
                data-lity
                className="smoothscroll button stroke"
              >
                <span className="icon-play" aria-hidden="true"></span> Descubra
                seu Café
              </a>
            </div>
          </div>
          <div className="home-image-right">
            <img src={welcomePic} data-aos="fade-up" />
          </div>
        </div>
      </div>

      <ul className="home-social-list">
        <li>
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-youtube-play"></i>
          </a>
        </li>
      </ul>

      <div className="home-scrolldown">
        <a href="#about" className="scroll-icon smoothscroll">
          <span>Scroll Down</span>
          <i className="icon-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
