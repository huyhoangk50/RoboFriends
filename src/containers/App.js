import React, { Component} from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestProducts, requestToBuyProduct, buyProduct} from '../actions';
// import { searchProducts } from './reducers';


const mapStateToProps = state => {
  console.log(state);
  return {
    searchField: state.searchProducts.searchField,
    products: state.requestProducts.products,
    isPending: state.requestProducts.isPending,
    isRequestedToBuyProduct: state.requestToBuyProduct.isRequestedTOBuyProduct,
    selectedProduct: state.requestToBuyProduct.product,
    isBuyingProductError: state.buyProduct.isBuyingProductError,
    error: state.requestProducts.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestProducts: () => dispatch(requestProducts()),
    onRequestToBuyProduct: (product) => dispatch(requestToBuyProduct(product)),
    onBuyProduct: (product, userInfo) => dispatch(buyProduct(product, userInfo)),
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestProducts();
  }


  render(){
    // const {robots} = this.state;
    const {searchField, onSearchChange, products, isPending, isRequestedToBuyProduct, error} = this.props;
    const filterProducts = products.filter(product => {
      return (product.name.toLocaleLowerCase().includes(searchField));
    });
    if(isPending){
      return (
        <h1>Loading</h1>
      );
    } else {
      if(isRequestedToBuyProduct) {
        return(
          <div className="tc">
          <h1 className='f1'>Quay ban hang mini</h1>
          <SearchBox 
            searchChange = {onSearchChange}
            searchField = {searchField}
          />
          <Scroll>
            <ErrorBoundry>
              <CardList 
                products = {filterProducts}
                requestToBuyProduct = {requestToBuyProduct}
              />
            </ErrorBoundry>
          </Scroll>
        </div>
        );
      } else {
        return (
          <div className="tc">
            <h1 className='f1'>Quay ban hang mini</h1>
            <SearchBox 
              searchChange = {onSearchChange}
              searchField = {searchField}
            />
            <Scroll>
              <ErrorBoundry>
                <CardList 
                  products = {filterProducts}
                  requestToBuyProduct = {requestToBuyProduct}
                />
              </ErrorBoundry>
            </Scroll>
          </div>
        );
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
