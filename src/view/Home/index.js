import React from 'react';

const Home = () =>  {
  return (
    <div className="flex flex-col min-h-screen justify-between {{- end }}">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Replic Challenge</h1>
          <nav>
            <a href="#" className="text-white mx-4 hover:text-gray-300">Home</a>
            <a href="#" className="text-white mx-4 hover:text-gray-300">About</a>
            <a href="#" className="text-white mx-4 hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">This is for Repliq Challange</h2>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</a>
        </div>
      </main>

      <footer className="mt-auto bg-gray-200 py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2023 My Landing Page. All rights reserved.
        </div>
      </footer>
    </div>
  
  );
}

export default Home;