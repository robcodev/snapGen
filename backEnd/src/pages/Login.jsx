import React, { useState } from 'react';
import './Login.css';
import { supabase } from '../supabaseClient.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
  
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
  
      if (error) {
        console.error('Error during sign in:', error.message);
      } else {
        console.log('User signed in:', user);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="login-container">
      <div className='titulo'>
      <h1>SnapGen</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Enviar</button>
      </form>
    </div>
  );
}

export default Login;