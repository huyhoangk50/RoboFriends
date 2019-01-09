import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_TO_BUY_PRODUCT,
  BUY_PRODUCT_SUCCESS,
  BUY_PRODUCT_FAILED,
  CANCEL_ORDER
} from './constants';

import products from './ProductList';
import Web3 from 'web3';
let web3;
if (typeof window.web3 == "undefined") {    
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/" + "wpX77Y5cvP9fPe6Piv1k"));
} else {
    web3 = new Web3(window.web3.currentProvider);
}
var account;
web3.eth.getAccounts(function(err, accounts) { 
  account = accounts[0]; // the first one
});
let tokenABI = 
[ { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }, { "name": "data", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "tokenAddress", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transferAnyERC20Token", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenOwner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "newOwner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
let tokenAddress = "0x67782dea768fc8b7b8eb8f9a9bd937f625326faa";
let AuContract= web3.eth.contract(tokenABI);
let auInstance = AuContract.at(tokenAddress);

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const requestProducts = () => (dispatch) => {
  // dispatch({type: REQUEST_PRODUCTS_PENDING});
  dispatch({type: REQUEST_PRODUCTS_SUCCESS, payload: products});
  
}

export const requestToBuyProduct  = (product) => (dispatch) => {
  dispatch({type: REQUEST_TO_BUY_PRODUCT, payload: product});
}

export const buyProduct = (product) => (dispatch) => {
  auInstance.transfer("0xCFec1a4839D969a608F31Ad95A2774115962cD18", product.price * 10**18, {from: account}, (error, result) =>{
    if(error) {
      alert(`Mua ${product.name} không thành công`);
      dispatch({type: BUY_PRODUCT_FAILED, payload: error});
    } else {
      alert('Chúc mừng bạn đã mua thành công ' + product.name);
      dispatch({type: BUY_PRODUCT_SUCCESS, payload: product});
    }
  });
}

export const cancelOrder = () => (dispatch) =>{
  dispatch({type: CANCEL_ORDER, payload: {}});
}