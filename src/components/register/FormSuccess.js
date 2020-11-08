import React from 'react';
import { Link } from 'react-router-dom';
import './form.css';

const FormSuccess = () => {
  return (
    <div className='form-content'>
      <h1 className='form-success'>Great! You have been registered with us! </h1>
      <span className='form-success-register'>
        Go to Login<Link to="/login"> here</Link>
        </span>
    </div>
  );
};

export default FormSuccess;