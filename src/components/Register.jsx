import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './Contexts/AuthContext';


const Register = () => {
    const {createUser, setUser} = use(AuthContext);
    const handleRegiser = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, image, email, password);
        createUser( email, password)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error.code);
        })
    }
    return (

        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Register Now</h1>
                    <form onSubmit={handleRegiser}>
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input type="text" className="input" name="name" placeholder="Name" />
                            {/* image */}
                            <label className="label">ImageURL</label>
                            <input type="text" className="input" name="image" placeholder="ImageUrl" />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" />
                            
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