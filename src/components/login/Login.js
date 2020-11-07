import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../roll.svg'
import './login.css';

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="movie-logo" className="roll-logo" />
            <div className="login-container">
                <h3>Log In to Book My Movie</h3>
                <form>
                    <center>
                        <input type="username" placeholder="Username" />
                    </center>
                    <center>
                        <input type="password" placeholder="Password" />
                    </center>
                    <center>
                        <button type="submit" className="login-button">Log In</button>
                    </center>
                    <center>
                        <div className="sideinfo">
                            <h5>Forgot Pasword ?</h5>
                            <h5 className="dot"></h5>
                            <Link to="/register">
                                <h5 className="signup">Sign up to Book My Movie</h5>
                            </Link>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login
