import React, { useEffect, useState } from 'react'
import '../styles/MultiImage.css'

const MultiImageSlider = () => {
    let arr = [{
        image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=300'

    }, {
        image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
        , {
        image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
        , {
        image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=300'

    }, {
        image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
        , {
        image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
        , {
        image: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
    ]
    const [sliderImg, setSliderImg] = useState(arr);
    const [count, setCount] = useState(0);
    const [flag,setFlag]=useState(true);

    function handleNext() {
        setCount(preCount=>(preCount+1));
        setFlag(false)
        if ((count)==sliderImg.length-3) {
            setCount(0);
            console.log(count);
        }
    }
    function handlePrevious() {
        setCount(count - 1);
        setFlag(false)
        if (count <= 0) {
           setCount(sliderImg.length-3)
        }
    }
   
    useEffect(()=>{
       if (!flag) {
         return
       }

        let interval=null;
        interval =setInterval(() => {
            // setCount(count+1)
            // if ((count)==sliderImg.length-3) {
            //     setCount(0);
            //     console.log(count);
            // }

            setCount(count - 1);
        if (count <= 0) {
            // alert(sliderImg.length-1)
           setCount(sliderImg.length-3)
        //    console.log(sliderImg.length-1);
        }
        }, 1000);

        return ()=>clearInterval(interval)
    },[count,flag])


    function handlePlayStop() {
        setFlag(!flag)
    }

    return (
        <div>
            <div className='slider'>
                <div>
                    <img src={sliderImg[count + 0].image} alt="" />
                </div>
                <div>
                    <img src={sliderImg[count + 1].image} alt="" />
                </div>
                <div>
                    <img src={sliderImg[count + 2].image} alt="" />
                </div>
            </div>
            <button className='multiImageBtn' onClick={handleNext}>next</button>
            <button className='multiImageBtn' onClick={handlePrevious}>Previous</button>
            <button className='multiImageBtn' onClick={handlePlayStop}>{flag ? "pause":'Play'}</button>

        </div>
    )
}

export default MultiImageSlider
