import "../styles/auth.css";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({ //json obect 
    username: yup.string().required('Username is required'), 
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const handleRegister = (data) => {
        // Implement registration logic here
        console.log('Registering user:', { data });
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                
                <div className="auth-intro">
                    <h1>Create an Account</h1>
                    <p>Join to start searching for leads.</p>
                </div>
                <form onSubmit={handleSubmit(handleRegister)} className="register-form">
                
                    <div className="input-group">
                        {/* 4. Use the register function instead of value/onChange */}
                        <input {...register("username")} placeholder="Username" />
                        {/* 5. Display the error message if the user breaks the rule */}
                        <p className="error-text" style={{ color: 'red' }}>{errors.username?.message}</p>
                    </div>

                    <div className="input-group">
                        <input {...register("email")} placeholder="Email" />
                        <p className="error-text" style={{ color: 'red' }}>{errors.email?.message}</p>
                    </div>

                    <div className="input-group">
                        <input type="password" {...register("password")} placeholder="Password" />
                        <p className="error-text" style={{ color: 'red' }}>{errors.password?.message}</p>
                    </div>

                    <div className="input-group">
                        <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
                        <p className="error-text" style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
                    </div>

                    <button className="btn-primary" type="submit">Register</button>

                    <div className="auth-switch">
                        Already have an account? 
                        <button onClick={() => navigate('/login')} type="button" className="btn-link">
                            Log in here.
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};