import React from 'react'
import Item from './Item';

const summarizer = (result, item) => {
  console.log(result)
  const existingItem = result.find(i => i.id === item.id)

  if(!existingItem) {
    result.push({
      ...item,
      count: 1
    })
  } else {
    existingItem.count++
  };

  return result;
}

const CartPage = ({ items }) => {
  const cart = items.reduce(summarizer, [])
  return (
    <div className="CartPage">
      <ul>
        {cart.map(item => (
          <Item key={item.id} item={item}>
            {item.count}
          </Item>
        ))}
      </ul> 
    </div>
  )
};

export default CartPage