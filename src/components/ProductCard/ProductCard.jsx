import React from 'react';
import './ProductCard.css';


const ProductCard = ({product}) => {

    return (

        <div className="ProductCard">
           <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
        </div>
    );
}

export default ProductCard;