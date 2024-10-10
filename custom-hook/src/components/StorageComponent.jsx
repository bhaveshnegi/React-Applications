import React from 'react';
import useStorage from '../hook/UseStorage'; 
import "./StorageComponent.css"

const StorageComponent = () => {
  const [name, setName, removeName] = useStorage('name', 'John Doe', 'local');

  return (
    <div>
      <h2>Name: {name}</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={() => removeName()}>Remove Name</button>
    </div>
  );
};

export default StorageComponent;
