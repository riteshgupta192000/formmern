import React, { useEffect, useState } from 'react';
import ResponseComponent from '../components/ResponseComponent';
import './Responses.css';

const Responses = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/getData/', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUsers(data.user);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="mainContainer">
      {users.map((user) => (
        <ResponseComponent
          key={user._id}
          id={user._id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          message={user.message}
        />
      ))}
    </div>
  );
};

export default Responses;
