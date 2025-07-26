import React, { Fragment } from 'react';
import Header from '../../pages/Header';
import Sidebar from '../../pages/Sidebar';
import { Outlet, useParams } from 'react-router-dom';

export default function Dashboard() {
  const { userId } = useParams();

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const { name, email } = user;

  return (
    <Fragment>
      <Header userId={userId} />
      <div className="container-fluid" style={{ paddingTop: '85px' }}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10 offset-md-2">
            {/* Pass full user context */}
            <Outlet context={{ userId, name, email }} />
          </div>
        </div>
      </div>
      <Sidebar userId={userId} />
    </Fragment>
  );
}
