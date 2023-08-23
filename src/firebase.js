import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC9tIpPdFWK_r2r-erF-VkpaU2J51QllWc",
    authDomain: "ecommerce-db-32c58.firebaseapp.com",
    projectId: "ecommerce-db-32c58",
    storageBucket: "ecommerce-db-32c58.appspot.com",
    messagingSenderId: "279033995757",
    appId: "1:279033995757:web:47ae50acf2f54dca30c7e4",
    measurementId: "G-0YTCQK0JQ8"
};

const app = initializeApp(firebaseConfig);

// const jsonData = {
//     products: {
//       1: { name: 'Product 1', price: 29.99 },
//       2: { name: 'Product 2', price: 19.99 },
//       // ...more data
//     }
//   };
  
//   // Upload JSON data to Realtime Database
//   firebase.database().ref().set(jsonData);

export const database = getDatabase(app);
