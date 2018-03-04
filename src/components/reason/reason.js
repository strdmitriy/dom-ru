import React, { Component } from 'react';
import star from '../img/star.svg';
import tv_hd from '../img/tv_hd.svg';
import tv_portal from '../img/tv_portal.svg';

const data = [
  {
    title: 'Самый популярный',
    text: 'Наиболее подключаемым среди наших клиентов. Вне конкуренции!',
    img: star,
    alt: 'Star'
  },
  {
    title: 'Качество Full HD',
    text: 'А так же звуковое сопровождение формата Dolby Surround',
    img: tv_hd,
    alt: 'TV-HD'
  },
  {
    title: 'Новинки проката',
    text: '10-15 новинок каждую неделю и сотни любимых фильмов в ротации',
    img: tv_portal,
    alt: 'TV_Portal'
  }
];

class Reason extends Component {
  render() {
    var newsTemplate = data.map(function (item, index) {
      return (
        <div className="reason-item" key={index}>
          <img className="reason-item__img" src={item.img} alt={item.alt}></img>
          <p className="reason-item__title">{item.title}:</p>
          <p className="reason-item__text">{item.text}</p>
        </div>
      )
    })
    return (
      <section className="reason">
        <div className="reason__container">
        <h2 className="reason__title">Почему именно Viasat Premium HD?</h2>
          <div className="reason__wrapper">
            {newsTemplate}
          </div>
        </div>
      </section>
    );
  }
}

export default Reason;
