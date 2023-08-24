import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { fixBangladeshPhoneNumbers, isValidPhoneNumber } from '../../util/misc'
function CustomerModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage]     = useState('');

  const handleSubmit = async () => {
    const currentTimestamp = new Date().getTime();
    const db = getDatabase();
    console.log(name,number);
    if(name !== "" && number !== "" && isValidPhoneNumber(fixBangladeshPhoneNumbers(number))) {
      set(ref(db, 'customers/' + currentTimestamp), {
          name: name,
          number: fixBangladeshPhoneNumbers(number),
      })
        .then(() => {
          console.log('New Customer added successfully');
          setSuccessMessage('New Customer added successfully');
          setErrorMessage('');
  
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
        })
        .catch(error => {
          console.error('Error adding new Customer:', error);
          setSuccessMessage('');
          setErrorMessage('Error adding new Customer');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        });
    }

    // Clear input fields
    setName('');
    setNumber('');

    // Close the modal
    setTimeout(() => {
        onClose();
    }, 4000);
    
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 modal ${isOpen ? 'block' : 'hidden'} `}>
      <div className="modal-dialog bg-white w-1/3 p-4 rounded shadow-md">
        {successMessage && (
          <div className="py-2 px-4 rounded-md bg-green-500 text-white z-50">
            <p>{successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div className="py-2 px-4 rounded-md bg-red-500 text-white z-50">
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
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              value={number}
              onChange={e => setNumber(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
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

export default CustomerModal;
