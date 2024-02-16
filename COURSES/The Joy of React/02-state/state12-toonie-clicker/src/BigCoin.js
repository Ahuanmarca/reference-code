import React from 'react';
import './BigCoin.css';

function BigCoin(props) {
  const { setNumOfCoins } = props;
  
  return (
    <div className="coin-wrapper">
      <button
        className="coin"
        onClick={() => setNumOfCoins((prev) => prev + 2)}
      >
        <span className="visually-hidden">
          Add 2 coins
        </span>
        <img
          className="coin-image"
          alt=""
          src="https://sandpack-bundler.vercel.app/img/toonie.png"
        />
      </button>
    </div>
  );
}

export default BigCoin;