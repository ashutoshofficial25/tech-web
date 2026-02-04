import React from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Page Not Found | ReactCube</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <img
            className="mx-auto h-24 w-auto"
            src="/logo.png"
            alt="ReactCube Logo"
          />
          <h1 className="mt-6 text-5xl font-extrabold text-gray-900">404</h1>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-2 text-base text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <Link
              to="/"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Homepage
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/about"
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Need assistance?{' '}
            <Link
              to="/contact"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
