import React, { useState, useEffect } from 'react';
import CustomTable from '../../components/CustomTable';
import SideBar from '../../components/SideBar';

import { database } from '../../firebase';
import { getDatabase, ref, set, get } from "firebase/database";
import CustomerModal from '../CustomerModal';
import CustomTableCustomers from '../../components/CustomTableCustomers';


const AdminCustomerList = () =>  {
  
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
    const productsRef = ref(db, 'customers');

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
                number: data[key]?.number,
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
          <h1 className="text-2xl font-semibold mb-4">Customer List</h1>
          <button onClick={openModal} className={`px-3 py-1 bg-blue-500 text-white rounded`}>Add Customer</button>
        </div>
        <CustomTableCustomers header={["Name", "Phone"]} data={products} />
        <CustomerModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default AdminCustomerList;