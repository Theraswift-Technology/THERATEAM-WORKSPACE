import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
    return (
        <div className="auth-wrapper">
            <div className="login-container">
                <h1>Forgot password</h1>
                <p className="subtext">Enter your email and we would send you a<br />link to reset your password</p>

                <form style={{ width: '100%' }}>
                    <div className="form-group">
                        <input type="email" className="input-field" placeholder="Email" required />
                    </div>

                    <button type="submit" className="auth-action-btn">Reset password</button>
                </form>

                <div className="back-to-login">
                    Remember your password? <Link to="/login">Back to log in</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
