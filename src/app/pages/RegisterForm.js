import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = async (data) => {
    console.log("Submitting:", data);
    try {
      const res = await axios.post('https://aimix-app-backend-1.onrender.com/userregister', data);
      if (res.data.status === 251) {
        toast.success("Registered successfully!", { autoClose: 2000 });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.warning(res.data.msg || "Registration failed", { autoClose: 2000 });
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error", { autoClose: 2000 });
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #e1e2f7, #f1f3ff)'
      }}
    >
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div
          className="card p-4 shadow"
          style={{
            backgroundColor: 'rgba(150, 167, 243, 0.5)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            width: '400px',
            height: 'auto'
          }}
        >
          <h4 className="mb-4 text-center">Register</h4>
          <ToastContainer />

          <input
            type="text"
            placeholder="Name"
            className="form-control mb-2"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-danger">Name is required</p>}

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-danger">Email is required</p>}

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-2"
            {...register("password", { required: true, minLength: 5, maxLength: 10 })}
          />
          {errors.password?.type === "required" && <p className="text-danger">Password is required</p>}
          {errors.password?.type === "minLength" && <p className="text-warning">Minimum 5 characters</p>}
          {errors.password?.type === "maxLength" && <p className="text-danger">Maximum 10 characters</p>}

          <button className="btn btn-success w-100 mt-2" type="submit">Register</button>

          <div className="mt-3 text-center">
            <Link to="/">Back to Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
