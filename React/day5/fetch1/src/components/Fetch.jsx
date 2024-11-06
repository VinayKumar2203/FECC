import { useEffect, useState } from 'react'

const Fetch = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(json => setData(json))
            .catch((err)=> console.log('error in fetching',err));

    }, [])
       console.log(data)

    return (
      <>
          <div className='container'>
           {data.map((item)=>{
            return <div className='cards' key={item.id}>
                   <h1>Name:{item.name}</h1>
                   <h3> UserName:{item.username}</h3>
                   <p className='email_address'>Email:{item.email}</p>
                   <p  className='address email_address'>address:{item.address.city}, {item.address.street},{item.address.zipcode}</p>

            </div>
           })}
        </div>
      </>
    )
}

export default Fetch
