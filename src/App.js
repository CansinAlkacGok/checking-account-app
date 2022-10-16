import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  //const initialBalance = Number(localStorage.getItem('balance')) || 0;
  //const [balance, setBalance] = useState(initialBalance);
  //or
  const [balance, setBalance] = useState(0);
  const [depositStr, setDepositStr] = useState(0);
  const [withdrawalStr, setWithdrawalStr] = useState(0);


  //on mount, retrieve the balance from localStorage

  useEffect(() => { // for retrieving from localStorage but for it we need to use useState(0) not need to use initialBalance
    const storageBalance = localStorage.getItem('balance');

    if (storageBalance) {
      setBalance(parseInt(storageBalance))
    }
  }, []) // this effect will run only one for initial render // to ensure that eseEffect runs only after first initial render

  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]) // whenever balance changes, this effect will be executed

  function updateDepositStr(e) {
    setDepositStr(e.target.value);
  };

  function updateWithdrawalStr(e) {
    setWithdrawalStr(e.target.value);
  };

  function deposit() {
    setBalance(balance => balance + parseInt(depositStr))
    setDepositStr(0);
  };

  function withdraw() {
    setBalance(balance => balance - parseInt(withdrawalStr))
    setWithdrawalStr(0);
  }


  return (

    <div>

      <h1>Your current balance is {balance}€</h1>

      <input onChange={updateDepositStr} value={depositStr} type='number' />
      <button onClick={deposit}>Deposit</button>

      <input onChange={updateWithdrawalStr} value={withdrawalStr} type='number' />
      <button onClick={withdraw}>Withdraw</button>

    </div>

  )
}

export default App;