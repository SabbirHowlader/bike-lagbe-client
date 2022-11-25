import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();


    const handleLogin = data =>{
        console.log(data);
    }
    // const handleLogin = data =>{
    //     console.log(data);
    //     console.log(errors);
    //     setLoginError('');
    //     signIn(data.email, data.password)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(user);
    //         setLoginUserEmail(data.email);
            
    //     })
    //     .catch(error => {
    //         console.log(error.message)
    //         setLoginError(error.message);
    //     });
    // }
    return (
        <div className='h-[800] flex justify-center items-center my-20'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl font-bold text-center mb-5'>Please Login!</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email",{ required: "Email Address is required" })}className="input input-bordered w-full" />

                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span></label>
                        <input type="password" 
                        {...register("password", {
                            required:"password is required",
                            minLength:{value:6, message:'password must be 6 characters'}
                        })}
                        className="input input-bordered w-full" />

                        <label className="label"><span className="label-text">Forget password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    
                    <input className='btn btn-success w-full' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>New to Bike Lagbe? <Link className='text-secondary' to='/register'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-success w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;