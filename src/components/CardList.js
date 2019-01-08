import React from 'react'
import Card from './Card';

const CardList = ({requestToBuyProduct , products}) => {
  const cardComponents = products.map((product, index) => {
    return <Card 
    product = {product}
    key = {product.id}
    requestToBuyProduct  = {requestToBuyProduct }/>
  });
  return (
    <div>
      {cardComponents}
    </div>
  );
}

export default CardList;