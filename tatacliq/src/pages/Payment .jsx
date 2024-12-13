import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Payment = () => {
    const [payment, setPayment] = useState([]);
    const navigate=useNavigate()
    const { payId } = useParams();
    function handlePayment() {
        alert('Payment successfull');
         navigate('/data');
    }

    useEffect(() => {
        fetch(https://fakestoreapi.com/products/${payId})
            .then(res => res.json())
            .then(data => setPayment(data))
            .catch((error) => {
                console.log("error in payment  page", error);
            })
            .finally(() => {
                console.log('payment page api is called');
            })
    }, [payId])

  return (
    <div>
      <h1>payment {payId}</h1>
      <div>
         <h1>pay:-amount--{payment.price}</h1>
         <button style={{padding:'8px'}} onClick={handlePayment}>confirm payment</button>
      </div>
    </div>
  )
}

export default Payment
