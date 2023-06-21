import React from 'react';
import Style from '../Styles/Header.scss'
import search from '../Assets/search.png'
import login from '../Assets/log-in.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__row'>
                <div className='logo-wrap'>
                    <div className='logo-wrap__row'>
                        <div className='logo-image-wrap logo-image_elipse'/>
                        <p className='logo-name logo-name-wrap'>simple</p>
                        <div className='logo-image-wrap logo-image_rectan'/>
                        <div className='logo-image-wrap logo-image_elipse'/>
                    </div>
                </div>            

                <div className='menu-wrap'>
                    <a className='menu-item menu-item-wrap'>Продукция</a>
                    <a className='menu-item menu-item-wrap'>Материалы</a>
                    <a className='menu-item menu-item-wrap'>О нас</a>
                    <a className='menu-item menu-item-wrap'>Контакты</a>
                    <a className='menu-item menu-item-wrap '><img className='menu__item_icon' src={search}/></a>
                    <a className='menu-item menu-item-wrap '><img className='menu__item_icon' src={login}/></a>
                </div>
            </div>
        <div className='header-line header-line-wrap'>
        </div>
        </div>
    );
};

export default Header;