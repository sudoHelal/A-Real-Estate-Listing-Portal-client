import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (

        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Register Now</h1>
                    <form>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" />
                            {/* image */}
                            <label className="label">ImageURL</label>
                            <input type="text" className="input" placeholder="ImageUrl" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register Now</button>
                        </fieldset>
                    </form>
                    <p>Do you have account? please <Link className='text-[#7b6557] underline' to="/auth/login">LogIn</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Register;