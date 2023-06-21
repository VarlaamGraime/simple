import React from 'react';
import Style from '../Styles/Main.scss'
import imgMain from '../Assets/main.png'

const Main = () => {
    return (
        <div className='main-page'>
                <div className='title-main'>
                    <div className='title-main-wrap'>
                        <h3 className='title-main__title'>Простые вещи. Из бумаги</h3>
                        <h4 className='subtitle subtitle-text_long'>Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </h4>
                        <button className='button'>Каталог</button>
                    </div>
                </div>
                
                <img className='main-page__image_position' src={imgMain} />
        </div>
    );
};

export default Main;