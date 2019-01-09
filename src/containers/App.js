import React, { Component} from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import CheckingOut from '../components/CheckingOut/CheckingOut';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestProducts} from '../actions';


const mapStateToProps = state => {
  return {
    searchField: state.searchProducts.searchField,
    products: state.requestProducts.products,
    isPending: state.requestProducts.isPending,
    isCheckingOut: state.requestToBuyProduct.isCheckingOut,
    checkingOutProduct: state.requestToBuyProduct.product,
    isBuyingProductError: state.buyProduct.isBuyingProductError,
    error: state.requestProducts.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestProducts: () => dispatch(requestProducts()),
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestProducts();
  }


  render(){
    // const {robots} = this.state;
    const {searchField, onSearchChange, products, isPending, isCheckingOut, error, checkingOutProduct} = this.props;
    const filterProducts = products.filter(product => {
      return (product.name.toLocaleLowerCase().includes(searchField));
    });
    if(isPending){
      return (
        <h1>Loading</h1>
      );
    } else {
      if(isCheckingOut) {
        return(
          <div className="tc">
          <h1 className='title'>Quay ban hang mini</h1>
          <CheckingOut 
          product = {checkingOutProduct}/>
        </div>
        );
      } else {
        return (
          <div className="tc">
            <h1 className='title'>Quay ban hang mini</h1>
            <SearchBox 
              searchChange = {onSearchChange}
              searchField = {searchField}
            />
            <Scroll>
              <ErrorBoundry>
                <CardList 
                  products = {filterProducts}
                  // requestToBuyProduct = {requestToBuyProduct}
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
