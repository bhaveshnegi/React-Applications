# StorageComponent

## 1. Task Description

The **StorageComponent** is a React component that allows users to store, update, and remove a value (in this case, a name) using **localStorage**. A custom `useStorage` hook is used to manage interactions with localStorage or sessionStorage, abstracting the logic for reading, updating, and deleting values from the storage.

---

### 2. Features

- **Store a Name:** Users can input and store a name in localStorage.
- **Update the Stored Name:** The input field allows users to update the stored name, which is then displayed dynamically.
- **Remove the Stored Name:** A button allows users to clear the stored value and remove it from localStorage.

---

### 3. Application Workflow

1. **Name Input:**
   - Users enter a name into the input field. The `useStorage` hook synchronizes the input with localStorage, storing the name.

2. **Display Name:**
   - The stored name is displayed in an `<h2>` element, and updates in real-time as the user changes the input.

3. **Remove Name:**
   - When the user clicks the "Remove" button, the stored name is deleted from localStorage, and the display is cleared.

---

### 4. Technologies Used

- **React** for building the UI components.
- **Custom `useStorage` Hook** for managing localStorage interactions.
- **localStorage** for persisting the stored name in the browser.

---

### 5. Component & Hook Structure

#### Components

- **StorageComponent:**
  - Renders an input field for the user to type in a name, displays the name, and provides a button to remove it from storage.

#### Custom Hook

- **useStorage Hook:**
  - Uses the `useState` hook to manage the value from localStorage.
  - Initializes with a default value if no value is present in localStorage for the specified key.
  - Provides methods to update and remove the value from localStorage.

---


