import React from 'react';
import Styles from '../Styles/About.scss'
import card1 from '../Assets/first-card.png'
import card2 from '../Assets/second-card.png'
import card3 from '../Assets/third-card.png'
import folder from '../Assets/folder.png'

const About = () => {
    return (
        <div className='about'>
                <div className='about-header'>
                    <div className='row-center'>
                        <div className='about-wrap'>
                            <div className='about__border'></div>
                            <div className='items-about-row'>
                                    <img className='item-about-pict-position' src={card1}/>
                                <div className='item-about'>
                                    <div className='item-about__title'>V.1</div>
                                    <div className='subtitle item-about__subtitle-width'>Результат вашего обучения</div>
                                </div>
                            </div>
                        </div>

                        <div className='about-wrap'>
                            <div className='about__border'></div>
                            <div className='items-about-row'>
                                <div className='item-about__pict'>
                                    <img className='item-about-pict-position' src={card2}/>
                                </div>
                                <div className='item-about'>
                                    <div className='item-about__title'>V.2</div>
                                    <div className='subtitle item-about__subtitle-width'>Результат вашего обучения</div>
                                </div>
                            </div>
                        </div>
                        <div className='about-wrap'>
                            <div className='about__border'></div>
                            <div className='items-about-row'>
                                <div className='item-about__pict'>
                                    <img className='item-about-pict-position' src={card3}/>
                                </div>
                                <div className='item-about'>
                                    <div className='item-about__title'>V.3</div>
                                    <div className='subtitle item-about__subtitle-width'>Результат вашего обучения</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='row-center'>
                        <div className='item-main'>
                            <img src={folder}/>
                        </div>
                            <div className='item-main'>
                                <p className='title-text'>Максимальная белизна </p>
                                <p className='subtitle-text subtitle-text_long'><br/>  Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.<br/><br/>Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                                </p>
                            </div>
                    </div>    
        </div>
    );
};

export default About;