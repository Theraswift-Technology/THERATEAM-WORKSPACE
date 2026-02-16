'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/LoginPage.css';

const LoginPage = () => {
    React.useEffect(() => {
        document.title = 'Log In - THERASWIFT';
    }, []);

    return (
        <div className="auth-wrapper">
            <div className="login-container">
                {/* Logo */}
                <img src="https://api.builder.io/api/v1/image/assets/e8bee67e021d48bba07492581bef02e4/10b80bf6fd196a01a68987e5e2caf2587599f8b0?placeholderIfAbsent=true"
                    alt="Logo" className="logo" />

                <h1>LOG IN</h1>

                <form style={{ width: '100%' }}>
                    <div className="form-group">
                        <input type="email" className="input-field" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <input type="password" className="input-field" placeholder="Password" required />
                    </div>

                    <div className="forgot-password">
                        <Link href="/forgot-password">Forgot your password?</Link>
                    </div>

                    <button type="submit" className="auth-login-btn">Log in</button>
                </form>

                <div className="divider">
                    <span>or</span>
                </div>

                <button className="social-btn">continue with google</button>
                <button className="social-btn">continue with apple</button>

                <Link href="/create-account" className="create-account">First time here? create an account</Link>
            </div>
        </div>
    );
};

export default LoginPage;
