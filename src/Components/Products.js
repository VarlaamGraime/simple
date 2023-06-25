import React from 'react';
import styles from '../Styles/Products.scss'
import boxImage from '../Assets/boxImg.jpg'
import arrow from '../Assets/Arrow 1.png'
import pack from '../Assets/GroupImageProducts.png'
import paperBag from '../Assets/PaperBag.png'
import brief from '../Assets/Briefcase.png'
import otherProd from '../Assets/other1.png'
import otherProd2 from '../Assets/other2.png'


const Products = () => {
    return (
        <div className='products-page'>
                <div className='row-center'>
                    <div className='products__column'>
                        <div className='item-products'>
                            <div className='image-container'>
                                <img className='background-image' src={boxImage}/>
                                <img className='foreground-image position-pack' src={pack}/>
                            </div>
                            <p className='name'>Упаковка</p>
                            <p className='edition'>Тираж: от 50 штук</p>
                            <p className='subtitle-text subtitle-text_short'>Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.</p>
                            <button className='button-more'>Подробнее  <img src={arrow}/></button>
                          

                        </div>
                    </div>

                    <div className='products__column'>
                    <div className='item-products'>
                            <div className='image-container'>
                                <img className='background-image' src={boxImage}/>
                                <img className='foreground-image position-bag' src={paperBag}/>
                            </div>
                            <p className='name'>Пакеты</p>
                            <p className='edition'>Тираж: от 200 штук</p>
                            <p className='subtitle-text subtitle-text_short'>С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.</p>
                            <button className='button-more'>Подробнее <img src={arrow}/> </button>
                           

                        </div>
                    </div>

                    <div className='products__column'>
                    <div className='item-products'>
                            <div className='image-container'>
                                <img className='background-image' src={boxImage}/>
                                <img className='foreground-image position-case' src={brief}/>
                            </div>
                            <p className='name'>Кейсы</p>
                            <p className='edition'>Тираж: от 30 штук</p>
                            <p className='subtitle-text subtitle-text_short'>Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.</p>
                            <button className='button-more'>Подробнее <img src={arrow}/></button>
                           

                        </div>
                    </div>

                    <div className='products__column'>
                    <div className='item-products'>
                           <div className='image-container'>
                                <img className='background-image' src={boxImage}/>
                                <img className='foreground-image position-other-prod' src={otherProd}/>
                                <img className='foreground-image position-other-prod2' src={otherProd2}/>
                            </div>
                            <p className='name'>Другие изделия </p>
                            <p className='edition'>Тираж: от 100 штук</p>
                            <p className='subtitle-text subtitle-text_short'>Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.</p>
                            <button className='button-more'>Подробнее <img src={arrow}/></button>
                          
                        </div>
                    </div>
                    
                </div>
            </div>    
    );
};

export default Products;