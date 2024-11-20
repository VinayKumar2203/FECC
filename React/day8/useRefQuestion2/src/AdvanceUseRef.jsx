import { useEffect, useRef, useState } from "react";

const AdvanceUseRef = () => {

  let [inputDet, setInputDet] = useState({ name: "", email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted", inputDet);
  }

  function handleChangeName(e) {
        setInputDet(e.target.value);

    // setInputDet({ ...inputDet, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  function handleChangeEmail(e) {
    setInputDet(e.target.value);
    // setInputDet({ ...inputDet, [e.target.name]: e.target.value });
    console.log(e.target.value);

  }


  const nameRef = useRef(null);
  const emailRef = useRef(null);


  useEffect(() => {
    nameRef.current.focus();
  }, [])

  function handleFocus(emailRef) {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }


  return (
    <div>
      <form onClick={handleSubmit}>
        <label>
          name:-
          <input
            ref={nameRef}
            type="text"
            placeholder="name.."
            value={inputDet.name}
            onChange={handleChangeName}
          />
        </label>
        <label>
          email:-
          <input
            ref={emailRef}
            type="email"
            placeholder="email..."
            value={inputDet.email}
            onChange={handleChangeEmail}
            onFocus={()=>handleFocus(emailRef)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default AdvanceUseRef
