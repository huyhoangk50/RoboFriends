import React from 'react';
import {connect} from 'react-redux';
import {buyProduct, cancelOrder} from '../../actions';


const CheckingOut = ({product, buyProduct, cancelOrder}) => {
  const onBuyProduct = () => {
    buyProduct(product);
  }
  const onCancelOrder = () => {
    cancelOrder();
  }
  return (
    <div>
      <div className="bg-white min-vh-100">
        <form action="#" className="checkout-form">
            <div className="row checkout-inputs">
              <div className="fl w-50 pa5 tl">
                  <h2 className="mv4">Thông tin người mua</h2>
                  <div className="measure">
                    <label htmlFor="name" className="f6 b db mb2">Tên người mua</label>
                    <input type="text" className="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Tên" list="suggestionbuyerName"/>
                  </div>
                  <div className="measure">
                    <label htmlFor="email" className="f6 b db mb2">Email</label>
                    <input type="text" className="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Email" list="suggestionbuyerEmail"/>
                  </div>
              </div>
              <div className="fl w-50 pa5 tl">
                  <h2 className="mv4">Thông tin người nhận</h2>
                  <div className="measure">
                    <label htmlFor="name" className="f6 b db mb2">Tên người nhận</label>
                    <input type="text" className="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Tên" list="suggestionshipName"/>
                  </div>
                  <div className="measure">
                    <label htmlFor="name" className="f6 b db mb2">Địa chỉ người nhận</label>
                    <input type="text" className="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Địa chỉ" list="suggestionshipAddress"/>
                  </div>
                  <div className="measure">
                    <label htmlFor="name" className="f6 b db mb2">Số điện thoại người nhận</label>
                    <input type="tel" className="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Số điện thoại" list="suggestionshipPhone"/>
                  </div>
              </div>
            </div>
            <div className="df">
              <div className="w-100 text-right mt-5">
                <button className="br3 fc f6 link dim ph4 pv2 mb2 dib black bg-success mr3" onClick={onCancelOrder}>Huỷ</button>
                <button className="br3 fc f6 link dim ph3 pv2 mb2 dib black bg-success" onClick={onBuyProduct}>Thanh toán</button>
              </div>
            </div>
        </form>
      </div>

    </div>
  )
}



export default connect(null, {buyProduct, cancelOrder})(CheckingOut);