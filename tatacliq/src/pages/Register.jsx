import React, { useRef, useState } from 'react'
import '../styles/Register.css'
import { useAuth } from "../context/AuthContext";


export const Register = () => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneRef = useRef();
  const errorShowOfPhone = useRef();
  const eyeRef = useRef();
  const errorShow = useRef();
  const { register } = useAuth();
  const [eyeChange, setEyeChange] = useState(false);
  const [inputValues, setInputValues] = useState({
    fullname: '',
    username: '',
    phone: '',
    email: '',
    password: ''
  })

  function handleInputValue(e) {
    const { name, value } = e.target;
    let obj = { ...inputValues, [name]: value }
    obj.username = obj.email;
    setInputValues(obj)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(phoneRef);
    if (passwordRef.current.value === confirmPasswordRef.current.value && phoneRef.current.value.length == 10) {
      errorShow.current.style.display = "none"
      passwordRef.current.style.border = 'none';
      confirmPasswordRef.current.style.border = 'none';
      errorShowOfPhone.current.style.display = "none"
      let details = inputValues;
      register(details);
      setInputValues();
    }
    else if (phoneRef.current.value.length <= 10) {
      errorShowOfPhone.current.style.display = "block"
      errorShowOfPhone.current.textContent = "Your number must be in 10 digit ! please try again "

    }
    else if (!passwordRef.current.value === confirmPasswordRef.current.value) {
      errorShow.current.style.display = "block"
      passwordRef.current.style.border = '2px solid red';
      confirmPasswordRef.current.style.border = '2px solid red';
      errorShow.current.textContent = "Please enter a valid password ! please try again "
    }
  }

  function handleEyeClick() {
    setEyeChange(!eyeChange);
    if (eyeChange === true) {
      eyeRef.current.src = '/images/closeEye.png'
      passwordRef.current.type = "password"
      confirmPasswordRef.current.type = "password"
    }
    else {
      eyeRef.current.src = '/images/eyeOfForm.png'
      passwordRef.current.type = "text"
      confirmPasswordRef.current.type = "text"

    }
  }

  return (
    <>
      <div className='container'>
        <div className='createAccountDiv'>
          <div className='texTofCreate'><h1>Create an Account</h1></div>
          <div className='formDetails'>
            <form action="" onSubmit={handleSubmit}>
              <div>
                <input name='fullname' type="text" placeholder='Full name*' onChange={(e) => handleInputValue(e)} required />
              </div>
              <div>
                <input ref={phoneRef} name='phone' type="number" placeholder='Phone number*' onChange={(e) => handleInputValue(e)} required />
                <br />
                <span ref={errorShowOfPhone} className='errorShowOfPhone'>your number will be in 10 digit. </span>
              </div>
              <div>
                <input name='email' type="email" placeholder='Email' onChange={(e) => handleInputValue(e)} required />
              </div>
              <div className='passwordID'>
                <input ref={passwordRef} required name='password' type="password" placeholder='Password' onChange={(e) => handleInputValue(e)} />
                <div className='eyeLogo' onClick={handleEyeClick}>
                  <img ref={eyeRef} src="/images/closeEye.png" alt="" />
                </div>
              </div>
              <div>
                <input ref={confirmPasswordRef} type="password" required name='confirmPassword' placeholder='Conform password' onChange={(e) => handleInputValue(e)} />
                <br />
                <span ref={errorShow} className='errorShow'>your password is wrong </span>
              </div>
              <div className='continueWithGoogle'>
                <button type="submit">Create account</button>
              </div>
            </form>
          </div>
          <div ><button className='googleIconwithCotinue' ><img className='googleIcon' src="/images/googleIcon.png" alt="googleIcon" /> Continue with Googel</button></div>
          <div className='goToLoginPage'><p>Already have an account ? <a href="/login">Log in</a></p></div>
        </div>
      </div>
   </>
 )
}
