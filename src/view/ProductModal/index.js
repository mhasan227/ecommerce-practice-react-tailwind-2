import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';

function ProductModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage]     = useState('');

  const handleSubmit = async () => {
    const currentTimestamp = new Date().getTime();
    const db = getDatabase();
    console.log(name,price);
    if(name !== "" && price !== ""){
    set(ref(db, 'products/' + currentTimestamp), {
        name: name,
        price: price,
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    })
        .then(() => {
          console.log('New product added successfully');
          setSuccessMessage('New product added successfully');
          setErrorMessage('');
  
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        })
        .catch(error => {
          console.error('Error adding new product:', error);
          setSuccessMessage('');
          setErrorMessage('Error adding new product');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        });
    }

    // Clear input fields
    setName('');
    setPrice('');

    // Close the modal
    setTimeout(() => {
        onClose();
    }, 4000);
    
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 modal ${isOpen ? 'block' : 'hidden'} `}>
      <div className="modal-dialog bg-white w-1/3 p-4 rounded shadow-md">
        {successMessage && (
          <div className="py-2 px-4 rounded-md bg-green-500 text-white">
            <p>{successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div className="py-2 px-4 rounded-md bg-red-500 text-white">
            <p>{errorMessage}</p>
          </div>
        )}
        <div className="modal-header">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h2 className="text-xl font-semibold">Add New Product</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
        <div className="modal-body">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default ProductModal;
