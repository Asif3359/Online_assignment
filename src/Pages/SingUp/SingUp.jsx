import { useContext } from "react";
import imgLog2 from "../../assets/images/login/12085707_20944201.jpg"
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProviders";

const SingUp = () => {


    const {createUser}=useContext(AuthContext);

    const handleSingUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;

        console.log(name,email,password);

        createUser(email,password)
            .then(result =>{
                const user=result.user;
                console.log(user);
            } )
            .catch(error=>{
                console.log(error);
            })
    }
    return (
        <div className="">
        <div className="flex justify-around items-center py-10 px-2 lg:px-10   flex-col lg:flex-row">
            <div className=" w-1/2 mr-12 hidden lg:flex ">
                <img src={imgLog2} className="rounded-xl" alt="" />
            </div>
            <div className=" rounded-xl  w-full  max-w-sm  p-1 lg:px-3 border-2  ">
                <h1 className='text-3xl text-center font-bold mt-4'>Sing Up</h1>
                <form onSubmit={handleSingUp} className="">
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" id="name" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" id="password" name='password' placeholder="Confirm Password" className="input input-bordered" required />
                        <label htmlFor="link" className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' id="name" value="Sing Up" className="btn btn-primary" />
                    </div>
                    <div className='my-4 text-center'>
                        <p>Already Have an Account  <Link to="/login" className='text-orange-400'>login</Link></p>
                    </div>
                </form>

            </div>
        </div>
    </div>
    );
};

export default SingUp;