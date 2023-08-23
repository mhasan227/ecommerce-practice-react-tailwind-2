import React from 'react';
import SideBar from '../../components/SideBar';
import AdminHome from '../AdminProductList';


const AdminDashboard = () =>  {
  return (

    <div className='flex'>
          <SideBar />
          <div className="container mx-auto mt-12 px-4">
              <p className="text-lg font-medium text-center mb-4">Dummy Data</p>
              <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                  <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                      <div className="text-sm font-medium text-gray-500 truncate">
                          Total users
                      </div>
                      <div className="mt-1 text-3xl font-semibold text-gray-900">
                          12,00
                      </div>
                  </div>
                  <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                      <div className="text-sm font-medium text-gray-500 truncate">
                          Total Profit
                      </div>
                      <div className="mt-1 text-3xl font-semibold text-gray-900">
                          $ 450k
                      </div>
                  </div>
                  <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                      <div className="text-sm font-medium text-gray-500 truncate">
                          Total Orders
                      </div>
                      <div className="mt-1 text-3xl font-semibold text-gray-900">
                          20k
                      </div>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default AdminDashboard;