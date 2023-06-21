import React from 'react';
import Style from '../Styles/Main.scss'
import imgMain from '../Assets/main.png'

const Main = () => {
    return (
        <div className='main-page'>
            <div className='main-page__row'>
                <div className='title-main'>
                    <div className='title-main__column'>
                        <h3 className='title-main__title'>Простые вещи. Из бумаги</h3>
                        <h4 className='title-main__subtitle'>Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </h4>
                        <button className='title-main__button'>Каталог</button>
                    </div>
                </div>
                
                <div className='main-page__image'>
                    <img className='main-page__image_position' src={imgMain} />
                </div>
            </div>
        </div>
    );
};

export default Main;