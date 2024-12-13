import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const FetchData = () => {
    const [getdata, setGetData] = useState([]);
    const searchInputRef = useRef(null);
    const [filteredData, setFilteredData] = useState([]);
    let navigate=useNavigate();

    // api call  for getData..
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setGetData(json);
                setFilteredData(json);
            })
    }, [])

    // sort it means filters by category

    function handleChangeSection(e) {
        console.log(e.target.value);
        const category = e.target.value;
        if (category == '') {
            setFilteredData(getdata);
        }
        else {
            const finalValue = getdata.filter((item) => item.category === category);
            setFilteredData(finalValue);
            console.log(finalValue)
        }
    }

    // searching value...
    let id;
    function handleSearchValue(e) {
        if (id) {
            clearInterval(id);
        }
        id = setInterval(() => {

            const searchData = e.target.value.toLowerCase();
            if (searchData == '') {
                setFilteredData(getdata);
            }
            else {
                const filtered = getdata.filter(item =>
                    item.title.toLowerCase().includes(searchData)
                );
                setFilteredData(filtered);
            }
            clearInterval(id)
        }, 1000)
    }

    function handleMenClothing() {
        navigate('/menclothing')
    }

    function handleelectronics() {
        navigate('/electronics')
    }

    return (
        <div>
            <h1>FetchData</h1>
            <button onClick={handleMenClothing}>MenClothing</button><br />
            <button onClick={handleelectronics}>womenClothing</button>
            <select onChange={handleChangeSection} name="" id="">
                <option value="">Sort By category </option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>

            <input ref={searchInputRef} onChange={handleSearchValue} type="text" placeholder='search..' />
            <div className='cardBox' >
                {
                    filteredData.map((item) => (
                        <Link to={${item.id}}>
                            <div className='itemCard' key={item.id} >
                                <img style={{ width: '150px' }} src={item.image} alt="" />
                                <p><strong>Price</strong>{item.price}</p>
                                <p> <strong>Rating</strong>:- {item.rating.rate}⭐,<strong>People</strong>:-{item.rating.count}</p>

                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default FetchData
