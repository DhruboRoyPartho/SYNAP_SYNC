import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/loginImg.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const navigate = useNavigate();


    const [userType, setUserType] = useState(null);
    const [pressLogin, setPressLogin] = useState(false);
    // console.log("Type =", userType);

    const { login } = useContext(AuthContext);

    const chooseUserType = async (type) => {
        setPressLogin(false);
        setUserType(type);
    }

    const handleLogin = async e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        
        if (pressLogin) {
            const res = await login(email, password, userType)
            // console.log("Res from Login page =", res);

            if (res.token) {
                navigate('/');
            }
            else {
                alert("Invalid Credentials");
            }
        }

    }

    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='hidden lg:block w-1/2'>
                <img src={img} alt="" />
            </div>
            <div className='px-2 lg:px-32 space-y-4 lg:w-1/2'>
                

                <h3 className='text-center text-[#0808089d]'>Have no account? Register As <br />
                    <Link to={'/advocate-register'} className='font-semibold mx-1 underline hover:text-[#2ba329]'>Advocate</Link> <span className="mr-1">|</span>
                    <Link to={'/user-register'} className='font-semibold mx-1 underline hover:text-[#2ba329]'>User</Link>
                </h3>


                <div className='space-y-3'>
                    <h1 className='text-3xl font-semibold'>Login Here</h1>
                </div>

                <form onSubmit={handleLogin} className='space-y-8'>
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-[#2ba329] focus:ring-0 w-full p-2'
                        type="email" placeholder='Email' name='email' />
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-[#2ba329] focus:ring-0 w-full p-2'
                        type="password" placeholder='Password' name='password' />

                    <div className="flex items-center justify-between">
                        <h1 className="text-normal font-semibold text-gray-600">Your Role :</h1>
                        <div className="flex gap-4 items-center w-2/3">
                            <button onClick={() => chooseUserType('Company')} className={`w-1/2 px-2 py-2 border border-gray-600 text-base font-semibold text-gray-500 ${userType == 'Company' && "bg-[#2ba329] text-white border-none"}`}>Company</button>
                            <button onClick={() => chooseUserType('Student')} className={`w-1/2 px-2 py-2 border border-gray-600 text-base font-semibold text-gray-500 ${userType == 'Student' && "bg-[#2ba329] text-white border-none"}`}>Student</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <input
                            onClick={() => setPressLogin(true)}
                            className='text-white font-semibold bg-[#2ba329] rounded-sm px-6 py-2 cursor-pointer'
                            type="submit" value="Log In" />

                        <p className='font-semibold text-[#2ba329]'>Forget Password?</p>
                    </div>
                </form>



                {/* <h3 className='text-center text-[#0808089d]'>Have no account? Register As <br />
                    <Link to={'/advocate-register'} className='font-semibold mx-1 underline hover:text-[#2ba329]'>Advocate</Link> <span className="mr-1">|</span>
                    <Link to={'/user-register'} className='font-semibold mx-1 underline hover:text-[#2ba329]'>User</Link>
                </h3> */}
            </div>
        </div>
    );
};

export default Login;