import React, { useEffect, useState } from "react";
import {auth,provider} from "../../Firebase/FaribaseConfing";
import {signInWithPopup} from "firebase/auth";
import Google from "../../assets/Logo-google-icon-PNG.png"
import Home from "../../App";
import "./Logup.css"
function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div className="logun">
        {value?<Home/>:
        <button className="btn" onClick={handleClick}><img src={Google} alt="" /> Sign in With Google</button>
        }
    </div>
);
}
export default SignIn;