import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreateAccountPage.css';

const CreateAccountPage = () => {
    return (
        <div className="auth-wrapper">
            <div className="login-container">
                {/* Logo removed */}

                <h1>Lets get your account set up</h1>

                <form style={{ width: '100%' }}>
                    <div className="form-group">
                        <input type="email" className="input-field" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <input type="password" className="input-field" placeholder="Password" required />
                    </div>

                    <div className="forgot-password">
                        <a href="#">Forgot your password?</a>
                    </div>

                    {/* Button text matches provided screenshot "Log in" although likely a semantic error in design, keeping as is per instructions */}
                    <button type="submit" className="auth-action-btn">Sign up</button>
                </form>

                <div className="divider">
                    <span>or</span>
                </div>

                <button className="social-btn">continue with google</button>
                <button className="social-btn">continue with apple</button>

                <Link to="/login" className="create-account">Already have an account? log in</Link>
            </div>
        </div>
    );
};

export default CreateAccountPage;
