import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

const WomenClothing = () => {
    const [getdata, setGetData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => {
                setGetData(json);
                // setFilteredData(json);
            })
    }, [])
    return (
        <div>
            <h1>Electronic</h1>
            <div className='cardBox' >
                {
                    getdata.map((item) => (

                        <div className='itemCard' key={item.id} >
                            <img style={{ width: '150px' }} src={item.image} alt="" />
                            <p><strong>Price</strong>{item.price}</p>
                            <p> <strong>Rating</strong>:- {item.rating.rate}⭐,<strong>People</strong>:-{item.rating.count}</p>

                        </div>

                    ))
                }
            </div>
        </div >
    )
}

export default WomenClothing
