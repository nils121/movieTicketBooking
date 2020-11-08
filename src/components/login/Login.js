import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import validate from '../register/validateInfo';
import useForm from '../register/useForm';
import '../register/form.css';
import logo from '../../roll.svg'
import './login.css';

const Login = ({ submitForm }) => {
  const isLogin = true
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate, 
      isLogin
    );
  
    return (
        <div className='form-container'>
        <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <img src={logo} alt="movie-logo" className="roll-logo" />
        <h3 className="heading">
          Login to BookMySeat!
        </h3>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          Forgot password? <Link to="/register"> Register</Link>
        </span>
      </form>
    </div>
    </div>
    )
}

export default Login
