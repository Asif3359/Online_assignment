
import imgLog1 from "../../assets/images/login/12085707_20944201.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";

const Login = () => {

    const { singIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;


        singIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                if (loggedInUser?.email) {
                    navigate(location.state ? location?.state : "/");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="  ">
            <div className=" flex justify-around items-center py-10 px-2 lg:px-10  flex-col lg:flex-row">
                <div className=" w-1/2 mr-12 hidden lg:block">
                    <img src={imgLog1} className="rounded-xl" alt="" />
                </div>
                <div className="rounded-xl  w-full  max-w-sm  p-1 lg:px-3 border-2">
                    <h1 className='text-3xl text-center font-bold mt-4'>Log In</h1>
                    <form onSubmit={handleLogin} className=" ">
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
                            <input type='submit' value="log In" className="btn btn-primary" />
                        </div>
                        <div className='my-4 text-center'>
                            <p>New To Sherlock School <Link to="/singUp" className='text-orange-400'>Sing Up</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;