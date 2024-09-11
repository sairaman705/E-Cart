import React, {useState} from 'react';
import {toast} from 'react-toastify';
import Layout from "./../../components/Layout/Layout";
import "./Register.css";

const Login = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasseord] = useState("");
    const [phone, setPhone] = useState("");

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,address,email,password,phone);
        toast.success("Register Successfully !");
    }

    return(
        <Layout>
            <div className="register-container">
                <h2>Register</h2>
                <p>Sign Up to continue </p>
                <form onSubmit={handleSubmit}>
                    <div className="register-form-group">
                        <label>Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="formcontrol" required/>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="formcontrol" required/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="formcontrol" required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={(e) => setPasseord(e.target.value)} value={password} type="password" className="formcontrol" required/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="formcontrol" required/>
                    </div>
                    
                    <button type="submit" className="form-btn">Sign Up</button>
                </form>
            </div>
        </Layout>
    );
}

export default Login;