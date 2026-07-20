import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we will eventually add backend integration to verify the user
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '60vh', marginTop: '40px', marginBottom: '40px' }}>
            <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px', border: 'none', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
                <h2 className="text-center mb-4" style={{ color: '#198754', fontWeight: 'bold' }}>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-muted fw-semibold">Email address</label>
                        <input 
                            type="email" 
                            className="form-control p-2" 
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-muted fw-semibold">Password</label>
                        <input 
                            type="password" 
                            className="form-control p-2" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-4 fw-bold" style={{ borderRadius: '25px', padding: '12px' }}>
                        Login
                    </button>
                    <div className="text-center">
                        <span className="text-muted">Don't have an account? </span>
                        <Link to="/signup" className="text-success text-decoration-none fw-bold">Sign up here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
