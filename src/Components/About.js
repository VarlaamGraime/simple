import React from 'react';
import Styles from '../Styles/About.scss'

const About = () => {
    return (
        <div className='about'>
            <div className='about__body'>
                <div className='about__header'>
                    <div className='about__row'>

                        <div className='about__column'>
                            <div className='about__border'></div>
                            <div className='item-about'>
                                <div className='item-about__pict'></div>
                                <div className='item-about__column'>
                                    <div className='item-about__titile'>V.1</div>
                                    <div className='item-about__subtitle'>Результат вашего обучения</div>
                                </div>
                            </div>
                        </div>

                        <div className='about__column'>
                            <div className='about__border'></div>
                            <div className='item-about'>
                                <div className='item-about__pict'></div>
                                <div className='item-about__column'>
                                    <div className='item-about__titile'>V.2</div>
                                    <div className='item-about__subtitle'>Результат вашего обучения</div>
                                </div>
                            </div>
                        </div>
                        <div className='about__column'>
                            <div className='about__border'></div>
                            <div className='item-about'>
                                <div className='item-about__pict'></div>
                                <div className='item-about__column'>
                                    <div className='item-about__titile'>V.3</div>
                                    <div className='item-about__subtitle'>Результат вашего обучения</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='about__main'>
                    <div className='about__row'>
                        <div>
                            <image/>
                        </div>
                        <div className='about__column'>
                            <div className='item-main'>
                                <div className='item-main__title'></div>
                                <div className='item-main__subtitle'></div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default About;