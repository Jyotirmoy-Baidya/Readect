import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../style/LoginRegis.css";
const API = "mongodb://127.0.0.1:27017/Readect/Readers";
// const 

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = async (e) => {
        e.preventDefault();
        let resp = await fetch("/api/v1/reader/login", {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await resp.json();
        if (data.status == "success") {
            navigate("/");
            console.log("Valid Registration");
        }
        else {
            console.log(data);
            alert("Registration Failed");
        }

    }
    return (
        <div className='login-page'>
            <div className="container login-cont">
                <div className="row">
                    <form className="login-form col-md-4 col-10 mx-auto px-0 py-3 form-floating" >
                        <h1 className="display-6 text-center">Login</h1>
                        <hr className="w-100" />
                        <div className="form-floating mb-3 mx-5">
                            <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <label for="email">UserEmail</label>
                        </div>
                        <div class="form-floating mx-5">
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <label for=" password">Password</label>
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
        </div>
    )
}

export default Login