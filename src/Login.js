import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return ( 
        <div className="login-page">
            <h2>Login Page</h2>

            <form>
                <label>Email ID:</label>
                <input
                    type = "email"
                    required
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input
                    type = "password"
                    required
                    value = { password }
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <br></br>
                <br></br>
                <button className="loginButton">Login</button>
                <br></br>
                <br></br>
                <Link to="/signup" className="signUpRedirect">Don't have an account yet? Signup now!</Link>
            </form>
        </div>
     );
}
 
export default Login;