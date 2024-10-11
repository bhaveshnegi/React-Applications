import React, { useState } from 'react';
import './ShoppingCart.css'

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a new item to the cart
  const addItem = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ).filter((cartItem) => cartItem.quantity > 0)
      );
  };

  // Function to update the quantity of an item in the cart
  const updateItemQuantity = (itemId, quantity) => {
    setCartItems(
      cartItems.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity: quantity } : cartItem
      )
    );
  };

  return (
    <div className='cart-container'>
      <h1>Shopping Cart</h1>

      {/* Cart items */}
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((cartItem) => (
            <div key={cartItem.id} className="cart-item">
              <p>{cartItem.name}</p>
              <p>Price: ${cartItem.price}</p>
              <p>
                Quantity: 
                <input
                  type="number"
                  value={cartItem.quantity}
                  min="1"
                  onChange={(e) =>
                    updateItemQuantity(cartItem.id, parseInt(e.target.value, 10))
                  }
                />
              </p>
              <p>Total: ${cartItem.price * cartItem.quantity}</p>
              <button onClick={() => removeItem(cartItem.id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      {/* Example buttons for adding items */}
      <div>
        <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 1.5 })}>
          Add Item 1
        </button>
        <button onClick={() => addItem({ id: 2, name: 'Item 2', price: 1 })}>
          Add Item 2
        </button>
      </div>

      {/* Display total price */}
      <h2>
        Total Price: $
        {cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)}
      </h2>
    </div>
  );
};

export default ShoppingCart;
