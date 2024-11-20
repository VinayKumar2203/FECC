import React, { useEffect, useRef } from 'react'

const AdvanceUseRef = () => {
  let getData = {};

  let emailRef = useRef();
  let passwordRef = useRef();
  let spanEmailRef = useRef(null)
  let spanPassWordRef = useRef(null)


  // console.log(emailRef)
  // console.log(getData)


  useEffect(() => {
    emailRef.current.focus();

  }, [])


  function handleSubmitForm(e) {
    e.preventDefault();
    getData["email"] = emailRef.current.value;
    getData["Password"] = passwordRef.current.value;
    console.log(getData)
    console.log(emailRef, "email")
    console.log(passwordRef, "PasswordRef")
    if (emailRef.current.value == "" && passwordRef.current.value == "") {
      spanEmailRef.current.innerHTML = "Please enter a valid email"
      spanEmailRef.current.style.color = "red";
      spanPassWordRef.current.style.color = "red";
      spanPassWordRef.current.innerHTML = "Please enter a valid Password"
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label> email:-
          <input ref={emailRef} type="text" placeholder='enter you email' />
          <span ref={spanEmailRef} id='email'></span>
        </label>
        <label> Password:-
          <input ref={passwordRef} type="text" placeholder='enter you password' />
          <span ref={spanPassWordRef} id='password'></span>
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default AdvanceUseRef
