import React,{ useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { fixBangladeshPhoneNumbers, isValidPhoneNumber } from '../../util/misc'

export default function SignUp() {
    const [number, setNumber]       = useState('');
    const [password, setPassword]   = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage]     = useState('');

    const handleSubmit = async () => {
        const currentTimestamp = new Date().getTime();
        const db = getDatabase();
        console.log(password,number);
        if(password !== "" && number !== "" && isValidPhoneNumber(fixBangladeshPhoneNumbers(number))) {
          set(ref(db, 'users/' + currentTimestamp), {
              
              number: fixBangladeshPhoneNumbers(number),
              password: password,
          })
            .then(() => {
              console.log('Account created successfully');
              setSuccessMessage('Account created successfully');
              setErrorMessage('');
      
              setTimeout(() => {
                setSuccessMessage('');
              }, 3000);
            })
            .catch(error => {
              console.error('Account not created:', error);
              setSuccessMessage('');
              setErrorMessage('Account not created');
              setTimeout(() => {
                setErrorMessage('');
              }, 3000);
            });
        }
    
        // Clear input fields
        setPassword('');
        setNumber('');
        
    };
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
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
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign Up
                </h1>
                
                <div className="mt-6 mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Phone
                    </label>
                    <input
                        type="tel"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-6">
                    <button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Register
                    </button>
                </div>
                

            </div>
        </div>
    );
}