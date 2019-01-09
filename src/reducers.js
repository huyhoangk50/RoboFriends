import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED,
  BUY_PRODUCT_SUCCESS,
  BUY_PRODUCT_FAILED,
  REQUEST_TO_BUY_PRODUCT,
  CANCEL_ORDER
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

const initialStateCheckingProduct = {
  isCheckingOut: false,
  product: {}
}

export const requestToBuyProduct  = (state = initialStateCheckingProduct, action = {}) => {
  switch(action.type){
    case REQUEST_TO_BUY_PRODUCT:
      return Object.assign({}, state, {isCheckingOut: true, product: action.payload});
    case BUY_PRODUCT_SUCCESS:
      return Object.assign({}, state, {isCheckingOut: false, product: {}});
    case BUY_PRODUCT_FAILED:
      return Object.assign({}, state, {isCheckingOut: false, product: {}});
    case CANCEL_ORDER:
    return Object.assign({}, state, {isCheckingOut: false, product: {}});
    default:
      return state;
  }
}

const initialStateBuyingProduct = {
  isBuyingError: false,
  isBuyingSuccess: false,
  product: {},
  error: ""
};
export const buyProduct = (state = initialStateBuyingProduct, action = {}) => {
  switch(action.type){
    case BUY_PRODUCT_SUCCESS:
      return Object.assign({}, state, {isBuyingSuccess: true, isBuyingError: false, product: action.payload});
    case BUY_PRODUCT_FAILED:
      return Object.assign({}, state, {isBuyingSuccess: false, isBuyingError: true, error: action.payload});
    default:
      return state;
  }
}