import React, { Component } from 'react';

const data = [
  {
    price: '249 руб/мес',
    text: 'При подключении на 3 месяца'
  },
  {
    price: '199 руб/мес',
    text: 'При подключении на 6 месяца'
  }
];

class Service extends Component {
  render () {
    var newsTemplate = data.map(function (item, index) {
      return (
        <div className="condition-item" key={index}>
          <p className="condition__price">{item.price}:</p>
          <p className="condition__text">{item.text}</p>
        </div>
      )
    })
    return (
      <section className="service">
        <div className="service__container">
          <div className="condition">
            <h2 className="condition__title">Подключите самый популярный пакет каналов со скидкой</h2>
            {newsTemplate}
            <button className="btn-buy">Подключить</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
