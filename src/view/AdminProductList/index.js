import React from 'react';
import CustomTable from '../../components/CustomTable';
import SideBar from '../../components/SideBar';
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: 'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    image: 'https://cdn.pixabay.com/photo/2021/05/27/18/55/woman-6289052_640.png',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
      id: 7,
      name: 'Product 7',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
      id: 7,
      name: 'Product 7',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  
];
const AdminProductList = () =>  {
  return (
    <div className='flex'>
      <SideBar />
      <div className="container mx-auto p-4">
        <div className="mb-4" style={{display: 'flex', justifyContent: 'space-between'}}>
          <h1 className="text-2xl font-semibold mb-4">Product List</h1>
          <button className={`px-3 py-1 bg-blue-500 text-white rounded`}>Add Product</button>
        </div>
        <CustomTable header={["Name", "Price"]} data={products} />
      </div>
    </div>
  );
}

export default AdminProductList;