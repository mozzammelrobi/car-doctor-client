import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const {createUser, user} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        // const form = e.traget;..
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const user = { name, email, password }
        // console.log(user)

        createUser(email,password)
        .then(result => {
            // console.log(result.user)
            if(result.user){
                alert('Register sucessfully')
            }
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row justify-between">
                <div className="w-1/2 mr-12">

                    <img src={img} alt="" />
                </div>
                <div className="card  w-full max-w-sm shadow-2xl  p-12">
                    <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Register</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>Have account sign In <Link to='/login' className='font-bold text-[#FF3811]'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;