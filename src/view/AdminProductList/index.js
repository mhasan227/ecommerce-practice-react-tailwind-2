import React, { useState, useEffect } from 'react';
import CustomTable from '../../components/CustomTable';
import SideBar from '../../components/SideBar';

import { database } from './../../firebase';
import { getDatabase, ref, set, get } from "firebase/database";
import ProductModal from '../ProductModal';

const AdminProductList = () =>  {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts]       = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const db = getDatabase();
    const productsRef = ref(db, 'products');

    get(productsRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          //const productList = Object.values(data);
          let dataArray = [];
          for(let key in data){
              
              let obj = data[key];
              let list = {
                id: key,
                name: data[key]?.name,
                image: data[key]?.image,
                price: data[key]?.price,
              };

              dataArray.push(list);

          }
          setProducts(dataArray);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [products]);

  return (
    <div className='flex'>
      <SideBar />
      <div className="container mx-auto p-4">
        <div className="mb-4" style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1 className="text-2xl font-semibold mb-4">Product List</h1>
          <button onClick={openModal} className={`px-3 py-1 bg-blue-500 text-white rounded`}>Add Product</button>
        </div>
        <CustomTable header={["Name", "Price"]} data={products} />
        <ProductModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default AdminProductList;