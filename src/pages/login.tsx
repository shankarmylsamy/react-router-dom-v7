import React from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {

    const handleChange = (key: string, value: string) => {

    }

    return (<div className={styles.container}>
        <div className={styles.container2}>
            <p>Login with your details</p>
            <div className={styles.inputContainer}>
                <label>Enter your email address:</label>
                <input className={styles.input} type="text" placeholder="Enter email address" value="" onChange={(e) => handleChange(e.target.name, e.target.value)} />
            </div>
            <div className={styles.inputContainer}>
                <label>Enter your password:</label>
                <input className={styles.input} type="password" placeholder="Enter password" value="" onChange={(e) => handleChange(e.target.name, e.target.value)} />
            </div>
            <div>
                <button className={styles.loginButton}>Login</button>
                <Link to="/signup"><p className={styles.forgotPassword}>Forgot Password?</p></Link>
            </div>
        </div>
    </div>)
}

export default Login;