import React from 'react';
import styles from '../Styles/Products.scss'
import boxImage from '../Assets/boxImg.jpg'
import arrow from '../Assets/Arrow 1.png'

const Products = () => {
    return (
        <div className='main-page'>
                <div className='row-center'>
                    <div className='products__column'>
                        <div className='item-products'>
                            <img src={boxImage}/>
                            <p className='name'>Упаковка</p>
                            <p className='edition'>Тираж: от 50 штук</p>
                            <p className='subtitle-text subtitle-text_short'>Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.</p>
                            <button className='button-more'>Подробнее  <img src={arrow}/></button>
                          

                        </div>
                    </div>

                    <div className='products__column'>
                    <div className='item-products'>
                            <img src={boxImage}/>
                            <p className='name'>Пакеты</p>
                            <p className='edition'>Тираж: от 200 штук</p>
                            <p className='subtitle-text subtitle-text_short'>С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.</p>
                            <button className='button-more'>Подробнее <img src={arrow}/> </button>
                           

                        </div>
                    </div>

                    <div className='products__column'>
                    <div className='item-products'>
                            <img src={boxImage}/>
                            <p className='name'>Кейсы</p>
                            <p className='edition'>Тираж: от 30 штук</p>
                            <p className='subtitle-text subtitle-text_short'>Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.</p>
                            <button className='button-more'>Подробнее <img src={arrow}/></button>
                           

                        </div>
                    </div>

                    <div className='products__column'>
                    <div className='item-products'>
                            <img src={boxImage}/>
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