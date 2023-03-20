import {FaEyeSlash, FaEye} from "react-icons/fa"
import React, { useState } from 'react'
// import userServices from '../../Services/userServices'
import "./login.css"
import axios from "axios"

export default function SignIn(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const handleInputEmail = (e) => {
        setEmail(e.target.value)
        
        
    }   
    const handleInputPassw = (e) => {
        setPassword(e.target.value)
    }
    
    const hadleSubmit = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8080/user/api/login",
            {email: email,
            password: password}
        )
        .then((response) => {
            console.log("response:", response.data)
            if(response.data.erroCode !== 0){
                setErrMessage(response.data.message) 
    
            }else{
                setErrMessage('')
    
            }
     
        })
        } catch(e){
            console.log(e)
        }
            // .catch((err) => {
        //     console.log(err)
        //     alert(err)     
        // })
    }
    
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    } 
  return (
    <div className='login-container'>
        <div className="login">
            <h2>Login</h2>
            <form>
                
                    <input
                    type="text"
                    id="email"
                    name="email"
                    className="text_input"
                    onChange= {handleInputEmail}
                    />

                    <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="text_input"
                    onChange= {handleInputPassw}   
                    
                    />
                    <span className="eye-slash-icon" onClick={handleShowPassword}>
                        {showPassword ? <FaEyeSlash/> : <FaEye/> }
                    </span>   
                    <p style={{color : "red"}}>{errMessage}</p>
                <input
                    type="submit"
                    value="LOGIN"
                    className="btn-login"
                    onClick={hadleSubmit}
                    
                />
            </form>
            <a className="sign-up" href="/signup">Sign Up</a>
        </div>
    </div>
    
  )
}
