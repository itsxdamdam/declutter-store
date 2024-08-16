import React from 'react'
import Item from './Item';

const CartPage = ({ items }) => (
    <div className="CartPage">
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul> 
    </div>
  );

export default CartPage