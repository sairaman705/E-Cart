import {React} from 'react';
import Layout from "./../../components/Layout/Layout";
import "./Login.css";

const Login = () => {
    return(
        <Layout>
            <div className="container">
                <h2>Login</h2>
                <p>Sign In to continue </p>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="formcontrol" required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="formcontrol" required/>
                    </div>
                    
                    <button type="submit" className="form-btn">Sign In</button>
                </form>
            </div>
        </Layout>
    );
}

export default Login;