import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useProfileContext } from '../context/ProfileContext';
import toast, { Toaster } from 'react-hot-toast';
import "../style/LoginRegis.css";

const LoginAPI = "/api/v1/reader/login";
const LoggedCheckAPI = "/api/v1/reader/islogged";

function Login() {
    const navigate = useNavigate();
    const { login, checkLogin } = useProfileContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            toast.error("Please Fill All The Details");
            return;
        }
        const check = await login(LoginAPI, { email, password });
        if (check) {
            toast.error(check);
            setEmail("");
            setPassword("");
            return;
        }
        toast.success("Login Success");
        await checkLogin(LoggedCheckAPI);
        navigate("/");


    }
    return (
        <>
            <div className='login-page'>
                <div className="container-fluid login-cont">
                    {/* <div className="row"> */}
                    <form className="col-md-4 col-10 py-3 mx-2 form-floating login-form" >
                        <h1 className="display-6 text-center">Login</h1>
                        <hr className="w-100" />
                        <div className="form-floating mb-3 mx-5">
                            <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor="email">UserEmail</label>
                        </div>
                        <div className="form-floating mx-5">
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <label htmlFor=" password">Password</label>
                        </div>
                        <p className="mx-5 mb-1 login-forgetpass"><a href="/forgetPassword">Forget
                            Password?</a></p>
                        <div className="text-center">
                            <input className="login-submit-btn btn w-50" type="submit" value="Submit" onClick={loginUser} />
                        </div>

                        <p className="mx-5 my-3 text-center">Not a member? <a href="/register" className='signup'>Signup</a>
                        </p>
                    </form>
                </div>
            </div>
            {/* </div> */}
            <Toaster />
        </>
    )
}

export default Login