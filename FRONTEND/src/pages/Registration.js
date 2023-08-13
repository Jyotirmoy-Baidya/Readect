// import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../style/LoginRegis.css";
import { useProfileContext } from '../context/ProfileContext';


const RegisterAPI = "api/v1/reader/signup";

function Registration() {
    const navigate = useNavigate();
    const { register, checkLogin } = useProfileContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const registrationUser = async (e) => {
        e.preventDefault();
        const check = register(RegisterAPI, { name, email, password });
    }
    return (
        <div className='regis-page'>
            <div className="container registration-cont">
                <form className="login-form col-md-4 col-10 mx-auto px-0 py-3 form-floating" >
                    <h1 className="display-6 text-center">registration</h1>
                    <hr className="w-100" />
                    <div className="form-floating mb-3 mx-5">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Username" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <label htmlFor="Username">UserName</label>
                    </div>
                    <div className="form-floating mb-3 mx-5">
                        <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <label htmlFor="email">UserEmail</label>
                    </div>
                    <div className="form-floating mb-3 mx-5">
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating mx-5">
                        <input type="password" name="cpassword" className="form-control" id="cpassword" placeholder="ConfirmPassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        <label htmlFor="cpassword">ConfirmPassword</label>
                    </div>
                    <div className="text-center my-3">
                        <input className="registration-submit-btn btn w-50" type="submit" value="Submit" onClick={registrationUser} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration