import React, { Component } from 'react';
import small_logo from '../img/logo-footer.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-main">
        <div className="footer-main__container">
          <div className="footer-main__wrapper">
            <p className="footer-main__text">Спасибо, что пользуетесь услугами Дом.ru</p>
            <p className="footer-main__text footer-main__text--opacity">Если к вас возникли вопросы,<a href="dmitriy.st92@mail.ru">напишите нам</a> или позвоните</p>
          </div>
          <div className="footer-main__logo">
            <a href="/">
              <img src={small_logo} alt="logo" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
