import React from 'react';
import Styles from '../Styles/Footer.scss'
import sketch from '../Assets/sketch.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row-center'>  
                <div className='footer-item'>
                    <p className='title-text'>Simple скетчбук</p>
                    <p className='subtitle-text subtitle-text_long'>80 листов, твердая обложка, бумага  Fabriano 200 г/м2. Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!
                    </p>
                    <button className='button margin-button-footer'>Купить</button>
                </div>
                <div className='footer-item-img'>
                    <img  src={sketch}/>
                </div>
            </div>
            <div className='footer-block'>
                
            </div>
        </div>
    );
};

export default Footer;