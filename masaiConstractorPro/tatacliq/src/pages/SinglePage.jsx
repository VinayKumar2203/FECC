import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SinglePage = () => {
    const { id } = useParams();
    const [single, setSingle] = useState([]);
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setSingle(data))
            .catch((error) => {
                console.log("error in single page", error);
            })
            .finally(() => {
                console.log('single page api is called');
            })
    }, [id])

    function handleAddTocart() {
        setArr(prevArr => [...prevArr, single])
        localStorage.setItem('data', JSON.stringify([...arr, single]))
        alert('add successfully');
    }
    return (
        <div>
            <h1>SinglePage found {id} </h1>
            <div className='singleBox'>
                <div><img style={{ width: '200px' }} src={single.image} alt="" /></div>
                <div><p><strong>Price:- </strong>{single.price}₹ </p></div>
                <div><p><strong>Title:- </strong>{single.title}</p></div>
                <br />
                <div><p><strong>Description:- </strong>{single.description}</p></div>
                <br />
                <div><button style={{ padding: '7px' }} ><Link to='/addtocart'>GOtocart</Link></button></div>
                <br />
                <div><button style={{ padding: '7px' }} ><Link to=''>payNow</Link></button></div>
                <div><button style={{ padding: '7px' }} onClick={handleAddTocart} >addToCard</button></div>
            </div>
        </div>

    )
}

export default SinglePage
