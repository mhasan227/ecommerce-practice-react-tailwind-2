import React from 'react';

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

const ProductList = () =>  {
  return (

      <div className="flex flex-col min-h-screen justify-between {{- end }}">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      Product Collection
                  </h2>

                  <p className="mt-4 max-w-md text-gray-500">
                      You can easily buy and add to cart from here
                  </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                  <div className="flex rounded border border-gray-100">
                      <button
                          className="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                              />
                          </svg>
                      </button>

                      <button
                          className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                      >
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                              />
                          </svg>
                      </button>
                  </div>

                  <div>
                      <label htmlFor="SortBy" className="sr-only">SortBy</label>

                      <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
                          <option>Sort By</option>
                          <option value="Title, DESC">Title, DESC</option>
                          <option value="Title, ASC">Title, ASC</option>
                          <option value="Price, DESC">Price, DESC</option>
                          <option value="Price, ASC">Price, ASC</option>
                      </select>
                  </div>
              </div>

              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {products.map(product => (
                      <li key={product?.id}>
                          <a href="#" className="group block overflow-hidden">
                              <img
                                  src={product?.image}
                                  alt=""
                                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                              />

                              <div className="relative bg-white pt-3">
                                  <h3
                                      className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                  >
                                      {product?.name}
                                  </h3>

                                  <p className="mt-2">
                                      <span className="sr-only"> Regular Price </span>

                                      <span className="tracking-wider text-gray-900"> {product?.price} </span>
                                  </p>
                                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                      Add to Cart
                                  </button>
                              </div>
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}

export default ProductList;