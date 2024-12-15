import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
    const [getLocalStor, setGetLocalStor] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'))
        setGetLocalStor(data)
    }, [])
    console.log(getLocalStor)

    function handleGoToHome() {
        navigate('/data')
    }
    return (
        <div>
            <h1>welcome to the AddToCard</h1>
            <button onClick={handleGoToHome}>Go to Home</button>
            <div>
                {
                    getLocalStor?.map((item) => (
                        <div className='itemCard' key={item.id} >
                            <img style={{ width: '50px' }} src={item.image} alt="" />
                            <p><strong>Price</strong>{item.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AddToCart
