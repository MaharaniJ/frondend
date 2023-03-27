import React from 'react'
import Google from '../icon/google.png';
import Facebook from '../icon/facebook.png';
import Github from '../icon/github.png'

function login() {

    const google = ()=>{
        window.open('http://localhost/auth/google', '_self_')
    }
  return (
    <div className='login'>
        <h1 className='loginTitle'>Choose a Login Method</h1>
        <div className='wrapper'> 
        <div className='left'>
            <div className="loginButton google" onClick={google}>
                <img src={Google} alt="" className="icon" />Google
            </div>
            <div className="loginButton facebook">
                <img src={Facebook} alt="" className="icon" />Facebook
            </div>
            <div className="loginButton github">
                <img src={Github} alt="" className="icon" />Github
            </div>
        </div>
        <div className="center">
            <div className="line"></div>
            <div className="or">OR</div>



        </div>
        <div className='right'>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='password'/>
            <button className="submit">Login</button>
        </div>
        </div>
    </div>
  )
}

export default login