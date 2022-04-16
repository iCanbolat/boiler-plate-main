import {useEffect} from 'react';
import {getRequest} from '../config/axiosClient';

function Dashboard() {
  useEffect(() => {
    getRequest('auth/user').then(response => console.log(response.data));
  }, [])
  return (
    <div className="dashboard">
      <h1>Laravel React Boilerplate</h1>
    </div>
  );
}

export default Dashboard;
