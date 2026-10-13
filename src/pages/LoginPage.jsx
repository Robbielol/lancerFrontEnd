// src/pages/LoginPage.jsx
import "../styles/auth.css";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../hooks/useAuth';

// 1. Simpler Schema: Just ensure they aren't empty
const schema = yup.object().shape({
    email: yup.string().email("Must be a valid email").required("Email is required"),
    password: yup.string().required("Password is required")
});

export const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const { executeLogin, isLoading, error: apiError } = useAuth();

    const onSubmit = async (data) => {
        try {
            await executeLogin(data.email, data.password);
            navigate('/search'); // Redirect to search page after successful login
        } catch (err) {
            // Error is handled by useAuth and displayed below
            console.error("Login failed:", err.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                
                {/* The Welcome Introduction */}
                <div className="auth-intro">
                    <h1>Lancer</h1>
                    <p>
                        Discover local businesses in your area that need a website, 
                        all in one seamless search tool. Log in to continue.
                    </p>
                </div>
            
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <h2>Log in</h2>
                    
                    {/* Displays "Invalid email or password" from C# */}
                    {apiError && <p className="api-error" style={{ color: 'red' }}>{apiError}</p>}

                    <div className="input-group">
                        <input {...register("email")} placeholder="Email" />
                        <p className="error-text" style={{ color: 'red' }}>{errors.email?.message}</p>
                    </div>

                    <div className="input-group">
                        <input type="password" {...register("password")} placeholder="Password" />
                        <p className="error-text" style={{ color: 'red' }}>{errors.password?.message}</p>
                    </div>

                    <button className="btn-primary" type="submit" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Log In"}
                    </button>
                    
                </form>
                <div className="auth-switch">
                    Don't have an account? 
                    <button onClick={() => navigate('/register')} type="button" className="btn-link">
                        Register here.
                    </button>
                </div>
            </div>
        </div>
    );
};