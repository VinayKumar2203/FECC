import React, { useRef } from 'react'
import '../styles/Verfication.css'


const Verfication = () => {
    const maxLengthRef = useRef();

    function randomOtpGenerator() {
        console.log('click')
        let sixDigit = Math.floor(Math.random() * (999999 - 100000)) + 100000
        console.log(sixDigit)
    }

    let countForm = 0;
    function handleInputchange() {
        console.log('click')

    }

    return (
        <div className='verification_container'>
            <div className='verification_createAccountDiv'>
                <div className='verification_texTofCreate'><h1>Verification Code</h1></div>
                <div>
                    <p>Please enter the 6-digit code send to your
                        email <span style={{ color: 'red' }}>contact.uiuxexperts@gmail.com</span> for
                        verification </p>
                </div>
                <div className='verification_formDetails'>
                    <form action="" className='formcontainerforVeri'>
                        <div><input ref={maxLengthRef} onChange={handleInputchange} type="number" maxLength={1} /></div>
                        <div><input ref={maxLengthRef} onChange={handleInputchange} type="number" maxLength={1} /></div>
                        <div><input ref={maxLengthRef} type="number" maxLength={1} onChange={handleInputchange} /></div>
                        <div><input ref={maxLengthRef} type="number" maxLength={1} onChange={handleInputchange} /></div>
                        <div><input ref={maxLengthRef} type="number" maxLength={1} onChange={handleInputchange} /></div>
                        <div><input ref={maxLengthRef} type="number" maxLength={1} onChange={handleInputchange} /></div>
                    </form>
                </div>
                <div ><button className='verification_googleIconwithCotinue' > Verify </button></div>
                <div className='verification_goToLoginPage'><p>Didn’t receive any code ? <a href="#" style={{ color: 'red' }} onClick={randomOtpGenerator} >Resend again</a></p></div>
            </div>
        </div>
    )
}

export default Verfication
