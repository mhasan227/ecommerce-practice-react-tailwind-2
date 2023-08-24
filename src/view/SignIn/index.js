import React,{ useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { fixBangladeshPhoneNumbers, isValidPhoneNumber } from '../../util/misc'

export default function SignIn() {

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
              console.log('Sign In successfully');
              setSuccessMessage('Sign In successfully');
              setErrorMessage('');
      
              setTimeout(() => {
                setSuccessMessage('');
              }, 3000);
            })
            .catch(error => {
              console.error('Something wrong:', error);
              setSuccessMessage('');
              setErrorMessage('Something wrong');
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
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                
                <div className="mt-6 mb-2">
                    <label
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Phone Number
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
                <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline"
                >
                    Forget Password?
                </a>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                </div>
                

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="/signup"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}