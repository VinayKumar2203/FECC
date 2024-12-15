import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FetchData = () => {
    const [getdata, setGetData] = useState([]);
    const searchInputRef = useRef(null);
    const [filteredData, setFilteredData] = useState([]);
    let searchTimeout;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(json => {
                setGetData(json);
                setFilteredData(json);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function handleChangeSection(e) {
        const category = e.target.value;
        if (category === '') {
            setFilteredData(getdata);
        } else {
            const finalValue = getdata.filter(item => item.category === category);
            setFilteredData(finalValue);
        }
    }

    function handleSearchValue(e) {
        clearTimeout(searchTimeout);
        const searchData = e.target.value.toLowerCase();
        searchTimeout = setTimeout(() => {
            if (searchData === '') {
                setFilteredData(getdata);
            } else {
                const filtered = getdata.filter(item =>
                    item.title.toLowerCase().includes(searchData)
                );
                setFilteredData(filtered);
            }
        }, 1000);
    }

    return (
        <div>
            <h1>FetchData</h1>
            <select onChange={handleChangeSection} aria-label="Sort By Category">
                <option value="">Sort By Category</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>

            <input
                ref={searchInputRef}
                onChange={handleSearchValue}
                type="text"
                placeholder="Search..."
                aria-label="Search Products"
            />

            <h1>Fetched Data</h1>
            <div>
                {
                    filteredData.map(item => (
                        <div className="itemCard" key={item.id}>
                            <Link to={item.id}>
                                <img style={{ width: '150px' }} src={item.image} alt="" />
                                <p><strong>Price:</strong> {item.price}</p>
                                <p>
                                    <strong>Rating:</strong> {item.rating.rate}⭐,
                                    <strong> People:</strong> {item.rating.count}
                                </p>
                            </Link>
                        </div>

                    ))}
            </div>
        </div>
    );
};

export default FetchData;
