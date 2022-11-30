import React, { useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

const Register = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Register')

    const from = location.state?.from?.pathname || '/login';

    const handleSignup = (data) =>{
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast ('user Create Successfully')
            navigate(from, {replace: true});
            from.reset();
            const userInfo ={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{})
            .catch(err => console.log(err));
           
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)        
        });
    }

    return (
        <div className='h-[800] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-4xl font-bold text-center'>SignUp</h2>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...register("name", { required: "Your name is required" })} className="input input-bordered w-full" />

                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />

                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">password</span></label>
                    <input type="password"
                        {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: 'password must be 6 characters' },
                            pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message:'password must be strang'}
                        })}
                        className="input input-bordered w-full mb-4" />

                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>

                <input className='btn btn-primary w-full' value="Login" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-success w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Register;