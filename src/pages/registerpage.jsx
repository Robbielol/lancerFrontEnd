import React, { useState } from 'react';
import { useForm } from '@hookform/resolvers/yup';
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
        <div>
            <div className="header">
                <h1>Lancer</h1>
            </div>
            <h3 className='sub-title'>Create an account to start finding local businesses!</h3>
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

            <button type="submit">Register</button>
        </form>
        </div>
    );
};