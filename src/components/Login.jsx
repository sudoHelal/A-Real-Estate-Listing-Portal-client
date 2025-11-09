import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Contexts/AuthContext';

const Login = () => {
    const {signInUser} = use(AuthContext);
    const handleSignIn = (e) =>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login Now</h1>
                    <form onSubmit={handleSignIn}>
                        <fieldset className="fieldset">
                           
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral bg-[#7b6557] mt-4">LogIn Now</button>
                        </fieldset>
                    </form>
                    <p>Don't  have account? please <Link className='text-[#7b6557] underline' to="/auth/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;