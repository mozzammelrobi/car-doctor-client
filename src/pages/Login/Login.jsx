import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)


    const handleLogin = (e) => {
        
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.value;
        const user = {email, password}
        console.log(user)
        
        signIn(email,password)
        .then(result => {
            console.log(result.user)
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
                <h1 className="text-4xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to Car Doctor  <Link to='/register' className='font-bold text-[#FF3811]'>sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;