// src/components/LoginPage.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';



const LoginPage = () => {
    const navigate = useNavigate();
  
    const handleSignup = (e) => {
      navigate('/home'); // Redirects to the home page
    };
  
  return (
    <div className="login-container">
      <div className="left-panel">
        <h1>
          Channel-<span className="highlight">IQ</span>
        </h1>
        <p>Turn your long videos into <span className="highlight">VIRAL</span> short clips.</p>
        <ul>
          <li>✔️ AI SEO</li>
          <li>✔️ Auto Caption</li>
          <li>✔️ Auto Clipping</li>
          <li>✔️ Quality Enhancer</li>
          <li>✔️ Sound Improvement</li>
        </ul>
      </div>
      <div className="right-panel">
        <h2>Login to your account</h2>
        <GoogleLogin
          onSuccess={response => console.log(response)}
          onError={() => console.log("Login Failed")}
        />
        <div className="divider">or</div>
        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
          <button type="submit">Signup</button>
        </form>
        <a href="/forgot-password" className="forgot-password">Forget Password?</a>
        <p>
          By clicking Sign up with Google or Sign up with email, you agree with
          Channel-IQ <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
