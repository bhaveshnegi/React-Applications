# Shopping Cart Component

### 1. Project Description

This project is a **Shopping Cart** component built using **React**. It allows users to:

- **Add items** to the cart.
- **Remove items** from the cart.
- **Update item quantities**.
  
The cart displays the **item name**, **price**, **quantity**, and the **total cost** for each item. The total cost is dynamically updated based on the cart's content.

---

### 2. Features

- **Add Item:** Add new items to the cart. If the item already exists, the quantity is increased.
- **Remove Item:** Decrease the item quantity when the "Remove" button is clicked. If the quantity reaches 1, the item is removed from the cart.
- **Update Quantity:** Users can modify the quantity of items directly through input fields, and the total price is automatically updated.

---

### 3. Application Workflow

1. **Add Item Logic:**
   - When an item is added, the `addItem` function checks if the item is already in the cart. If it exists, it increments the item's quantity; otherwise, it adds the item with an initial quantity of 1.

2. **Update Quantity Logic:**
   - Users can manually adjust the quantity of an item using an input field. The `updateItemQuantity` function updates the cart's state and recalculates the total cost.

3. **Remove Item Logic:**
   - Clicking the "Remove" button decreases the item's quantity. If the quantity reaches 1, the item is completely removed from the cart.

4. **Cart Total Update:**
   - The total price of the cart is updated whenever the item quantities or prices change.

---

### 4. Technologies Used

- **React** for building the UI components.
- **useState** for managing the cart's state, including the items, quantities, and prices.
- **CSS** for styling the cart's layout and making it user-friendly.

---

### 5. Component & State Structure

#### Components

- **ShoppingCart Component:**
  - Displays the list of items in the cart with their name, price, quantity, and total cost for each item.

- **Item Component:**
  - Represents individual items in the cart, allowing the user to update quantity or remove the item.

#### State Management

1. **useState Hook:**
   - Used to manage the list of items in the cart and track the quantity and price of each item.

2. **Key Functions:**
   - `addItem`: Adds an item to the cart or increases the quantity of an existing item.
   - `updateItemQuantity`: Allows the user to update the item quantity manually.
   - `removeItem`: Decreases the item's quantity or removes it if the quantity reaches 1.

---
