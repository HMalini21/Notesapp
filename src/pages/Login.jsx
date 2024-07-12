import React, { useState } from 'react';
import Layout from '../components/Layout';
// import { type } from '@testing-library/user-event/dist/type';

function Login(props) {
  const { addArray } = props;
  const [testBox, setTestBox] = React.useState('');

  let [formdata, setFormdata] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: 0,
  });

  function handleChange(event) {
    setFormdata((prevFromData) => {
      return {
        ...prevFromData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formdata.password === formdata.confirmPassword) {
      setTestBox('');
      addArray(formdata);
      setFormdata({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: 0,
      });
    } else setTestBox('enter correct password');
  }
  return (
    <Layout title="Account">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={handleChange}
          name="firstName"
          value={formdata.firstName}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={handleChange}
          name="email"
          value={formdata.email}
          required
        />

        <input
          type="password"
          placeholder="Create a new password"
          onChange={handleChange}
          name="password"
          value={formdata.password}
          required
        />

        <input
          type="password"
          placeholder="confirm password"
          onChange={handleChange}
          name="confirmPassword"
          value={formdata.confirmPassword}
          required
        />
        {testBox && <p style={{ color: 'red' }}>{testBox}</p>}
        <input
          type="number"
          placeholder="Enter your Phone Number"
          onChange={handleChange}
          name="phoneNumber"
          value={formdata.phoneNumber}
          required
        />
        <button type="submit">submit</button>
        {/* {testBox && <p style={{ color: 'white' }}>Sucessfully Logined</p>} */}
      </form>
    </Layout>
  );
}

export default Login;
