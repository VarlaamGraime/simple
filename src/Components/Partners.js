import React from 'react';
import Styles from '../Styles/Partners.scss'
import canson from '../Assets/Partners/canson.png'
import fabriano from '../Assets/Partners/fabriano.png'
import hahnemuehle from '../Assets/Partners/hahnemuehle.png'
import royal from '../Assets/Partners/royal-talens.png'

const Partners = () => {
    return (
        <div className='partners'>
            <div className='row-center'>
                <div className='block-partners margin-block-partners'>
                    <img src={hahnemuehle}/>  
                </div>
                <div className='block-partners margin-block-partners'>
                    <img src={canson}/>  
                </div>
                <div className='block-partners margin-block-partners'>
                    <img src={royal}/>  
                </div>
                <div className='block-partners margin-block-partners'>
                    <img src={fabriano}/>  
                </div>
            </div>
        </div>
    );
};

export default Partners;