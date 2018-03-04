import React, { Component } from 'react';
import logo from '../img/Logotype.png';

class Promo extends Component {
  render() {
    return (
      <section className="promo">
        <div className="promo__container">
          <div className="logo">
            <a href="/">
              <img src={logo} className="promo__logo" alt="logo" />
            </a>
          </div>
          <h1 className="promo__title">Где лучшее кино? Друзья подскажут!</h1>
          <p className="promo__text">
          Наши Клиенты точно знают, где можно раздобыть самые свежие, впечатляющие,
          удивительные и суперинтересные фильмы.
          Конечно, в пакете каналов Viasat Premium HD!
          </p>
        </div>
      </section>
    );
  }
}

export default Promo;
