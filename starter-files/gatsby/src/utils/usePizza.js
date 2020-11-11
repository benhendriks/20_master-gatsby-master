import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
  // 1. Creat some state to hold our order
  const [order, setOrder] = useState([]);
  // 2. Make a function to make things to order
  function addToOrder(orderedPizza) {
    return setOrder([...order, orderedPizza]);
  }
  // 3. Make a function to remove things from the order
  function removeFromOrder(index) {
    setOrder([
      // everthing before the item we want to remove
      ...order.slice(0, index),
      // everthing after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data to a serverless function when they check out
  // TODO
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
