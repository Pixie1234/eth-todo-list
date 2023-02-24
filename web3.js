import Web3 from 'web3';

// create a new instance of the Web3 object
const web3 = new Web3(window.ethereum);

// request access to the user's accounts
window.ethereum.request({ method: 'eth_requestAccounts' });

// export the Web3 object
export default web3;