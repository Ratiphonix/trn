import React from 'react';
import './ProductCard.css';


// const ProductCard = ({product}) => {

//     return (
            

//         <div className="ProductCard">
//            <div className={'img'}/>
//             <div className={'title'}>{product.title}</div>
//             <div className={'description'}>{product.description}</div>
//             <div className={'price'}>
//                 <span>Стоимость: <b>{product.price}</b></span>
//             </div>
//         </div>
//     );
// }

// export default ProductCard;
const ProductCard = ({product}) => {

    return (
            

        <body>
            <div class="cont">
                <div class="product-card">
                    <div class="product-card__image">
                        <img src="kam.jpg" alt="Red Nike Shoes"/>
                    </div>
                    <div class="product-card__info">
                        <h2 class="product-card__title">{product.title}</h2>
                        <p class="product-card__description">{product.description}</p>
                        <div class="product-card__price-row">
                            <span class="product-card__price">Стоимость: <b>{product.price}</b></span>
                            <button class="product-card__btn">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default ProductCard;
