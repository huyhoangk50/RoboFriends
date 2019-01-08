import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED,
  BUY_PRODUCT_SUCCESS,
  BUY_PRODUCT_FAILED
} from './constants';

const initialStateSearching = {
  searchField: '',
  products: []
}

export const searchProducts = (state = initialStateSearching, action = {}) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}


const initialStateProducts = {
  isPending: false,
  products: [],
  error: ''
}

export const requestProducts = (state = initialStateProducts, action = {}) => {
  switch(action.type){
    case REQUEST_PRODUCTS_PENDING:
      return Object.assign({}, state, {isPending: true});
    case REQUEST_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {products: action.payload, isPending: false});
    case REQUEST_PRODUCTS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false});
    default:
      return state;
  }
}

const initialStateRequestProduct = {
  isRequestedToBuyProduct: false,
  product: {}
}

export const requestToBuyProduct  = (state = initialStateRequestProduct, action = {}) => {
  switch(action.type){
    case BUY_PRODUCT_SUCCESS:
      return Object.assign({}, state, {isRequestedToBuyProduct: action.payload.isRequestedToBuyProduct, product: action.payload.product});
    // case BUY_PRODUCT_FAILED:
    //   return Object.assign({}, state, {isSuccessful: action.payload});
    default:
      return state;
  }
}

const initialStateBuyingProduct = {
  
};
export const buyProduct = (state = initialStateBuyingProduct, action = {}) => {
  return state;
}