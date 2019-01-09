import React from 'react';
import './Card.css';
import { connect } from 'react-redux';
import { requestToBuyProduct } from '../actions';


const Card = ({product, requestToBuyProduct}) => {

  const onProductClick = () => {
    requestToBuyProduct(product);
  }

  return (
    <div className="br2 ba dark-gray mv4 w-100 w-50-m w-25-l mw5 center b--white-40" onClick={onProductClick}>
      <img src={product.url} alt="product" className="db w-100 br2 br--top" alt="Product"/>
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h2 className="f5 f4-ns mv0 white">{product.name}</h2>
          </div>
          <div className="block">
            <button className='value'>{product.price} KAT</button>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 white-60">
          {product.description}
        </p>
      </div>
    </div>
    // <div className='bg-light-green dib br3 ma2 grow' onClick={onProductClick}>
    //   <div>
    //     <img src={product.url} alt="product"/>
    //     <div>
    //       <h2>
    //         {product.name}
    //       </h2>
    //       <p>
    //         {product.description}
    //       </p>
    //       <div>
    //         <button className='value'>{product.price} KAT</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default connect(null, { requestToBuyProduct })(Card);

