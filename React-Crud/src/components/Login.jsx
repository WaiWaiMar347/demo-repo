import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy check
    if (username === 'admin' && password === '1234') {
      //onLogin();
      navigate('/dashboard');
      //<link to="/dashboard"></link>
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <div>
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input  className="border"value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input  className="border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="border" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login