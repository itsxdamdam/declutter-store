import React from 'react';

export const NavBar = ({ cartCount, onPageChange }) => (
  <nav>
    <ul>
      <li><a href="/" onClick={ e => { 
        e.preventDefault();
        onPageChange('store');
      }}>DeClutter Store</a></li>
      <li className="cart-count">
        <a href="/cart" onClick={ e => {
          e.preventDefault(); 
          onPageChange('cart');
          }}>
          <span role="img" aria-label="items in cart">
            🛒
          </span>
          {cartCount === 0 ? 'Empty' : cartCount}
        </a>
      </li>
    </ul>
  </nav>
);
