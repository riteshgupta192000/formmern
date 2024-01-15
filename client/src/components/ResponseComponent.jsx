import React from 'react';

const ResponseComponent = ({ name, email, phone, message, id }) => {
  const deleteResponse = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/deleteData/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error('Error deleting response:', error);
    }
  };

  return (
    <div id="resDiv">
      <h3>Name: <span className='dynamicValues'>{name}</span></h3>
      <h3>Email: <span className='dynamicValues'>{email}</span></h3>
      <h3>Phone: <span className='dynamicValues'>{phone}</span></h3>
      <h3>Message: <span className='dynamicValues'>{message}</span></h3>
      <button onClick={deleteResponse}>Delete</button>
    </div>
  );
};

export default ResponseComponent;
