import React from 'react';
import { useOutletContext } from 'react-router-dom';

const ProfilePage = () => {
  const { userId, name, email } = useOutletContext(); // Use context only

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h3 className="text-center mb-4">User Profile</h3>
        <div className="mb-3">
          <strong>User ID:</strong> <span>{userId}</span>
        </div>
        <div className="mb-3">
          <strong>Name:</strong> <span>{name}</span>
        </div>
        <div className="mb-3">
          <strong>Email:</strong> <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
