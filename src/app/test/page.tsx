// src/app/test/page.tsx
import React from 'react';
import Login from '../components/Login';


const TestPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Login />
      </div>
    </div>
  );
};

export default TestPage;
