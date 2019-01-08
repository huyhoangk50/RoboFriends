import React from 'react';
import './Card.css';


const Card = ({product, requestToBuyProduct }) => {
  return (
    <div className='bg-light-green dib br3 ma2 grow'>
      <div>
        <img src={product.url} alt="product"/>
        <div>
          <h2>
            {product.name}
          </h2>
          <p>
            {product.description}
          </p>
          <div>
            <button className='value' onClick={requestToBuyProduct (product)}>{product.price} AU</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

