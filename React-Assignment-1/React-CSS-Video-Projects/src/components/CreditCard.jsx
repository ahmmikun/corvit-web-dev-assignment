import React from 'react';
import './CreditCard.css';

export default function CreditCard() {
  return (
    <div className="credit-card-wrapper">
      <div className="container">
        <header>
          <span className="logo">
            <img src="/images/logo.png" alt="" />
            <h5>Master Card</h5>
          </span>
          <img src="/images/chip.png" alt="" className="chip" />
        </header>
        <div className="card-details">
          <div className="name-number">
            <h6>Card Number</h6>
            <h5 className="number">1234 5678 9012 3456</h5>
            <h5 className="name">Salman Ahmad</h5>
          </div>
          <div className="valid-date">
            <h6>Valid Thru</h6>
            <h5 className="date">12/28</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
