import React from 'react';
import Style from '../Styles/Header.scss'
import search from '../Assets/search.png'
import login from '../Assets/log-in.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__row'>
                <div className='logo'>
                    <div className='logo__row'>
                        <div className='logo__image logo__image_elipse'/>
                        <p className='logo__name'>simple</p>
                        <div className='logo__image logo__image_rectan'/>
                        <div className='logo__image logo__image_elipse'/>
                    </div>
                </div>            

                <div className='menu'>
                    <a className='menu__item'>Продукция</a>
                    <a className='menu__item'>Материалы</a>
                    <a className='menu__item'>О нас</a>
                    <a className='menu__item'>Контакты</a>
                    <a className='menu__item '><img className='menu__item_icon' src={search}/></a>
                    <a className='menu__item '><img className='menu__item_icon' src={login}/></a>
                </div>
            </div>
        <div className='header__line'>
        </div>
        </div>
    );
};

export default Header;