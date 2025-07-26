import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email === '' || password === '') {
      toast.warning("Email or Password is blank", { autoClose: 2000, position: "top-left", theme: "dark" });
    } else {
      try {
        const res = await axios.post('https://aimix-app-backend-1.onrender.com/userlogin', { email, password });

        if (res.data.status === 400 || res.data.status === 401 || res.data.status === 404) {
          toast.warning(res.data.msg, { autoClose: 2000, position: "top-left", theme: "dark" });
        } else if (res.data.status === 200) {
          toast.success(res.data.msg, { autoClose: 2000, position: "top-left", theme: "dark" });
          setTimeout(() => {
            navigate(`/dashboard/${res.data.userId}`);
          }, 2000);
        }

      } catch (err) {
        console.error(err);
        toast.error("Server error", { autoClose: 2000 });
      }
    }
  };

  return (
    <div className="card p-4 shadow"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '12px'
      }}>
      <h4 className="mb-3">Login</h4>
      <ToastContainer />
      <input
        type="email"
        placeholder="Email"
        className="form-control mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mb-2"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="btn btn-primary w-100" onClick={handleSubmit}>Login</button>

      <div className="mt-3 text-center">
        <span>New user? </span>
        <Link to="/register">Register here</Link>
      </div>
    </div>
  );
}

export default LoginForm;
