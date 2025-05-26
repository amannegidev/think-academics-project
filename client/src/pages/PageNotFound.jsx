
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-4xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-xl my-3">Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="text-white bg-[#fba418] px-4 py-2 rounded hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
  );
}


