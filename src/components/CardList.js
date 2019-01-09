import React from 'react'
import Card from './Card';

const CardList = ({products}) => {
  const cardComponents = products.map((product, index) => {
    return <Card 
    product = {product}
    key = {product.id}/>
  });
  return (
    <div className="flex flex-wrap">
      {cardComponents}
    </div>
  );
}

export default CardList;