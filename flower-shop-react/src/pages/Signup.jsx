import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we will eventually add backend integration to register the user
        console.log("Signing up with:", name, email, password);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh', marginTop: '40px', marginBottom: '40px' }}>
            <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '450px', border: 'none', borderRadius: '15px', backgroundColor: '#f8f9fa' }}>
                <h2 className="text-center mb-4" style={{ color: '#198754', fontWeight: 'bold' }}>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-muted fw-semibold">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control p-2" 
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
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
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-4 fw-bold" style={{ borderRadius: '25px', padding: '12px' }}>
                        Sign Up
                    </button>
                    <div className="text-center">
                        <span className="text-muted">Already have an account? </span>
                        <Link to="/login" className="text-success text-decoration-none fw-bold">Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
