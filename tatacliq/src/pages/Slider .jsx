import React, { useEffect, useState } from 'react'
import '../styles/Slider.css'

const Slider = () => {

    const [counter, setCounter] = useState(0); 
    const [isAutoPlay, setIsAutoPlay] = useState(true);
   

    let arrOfImg = [
        {
            urlofImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s',
            lable: 'logoName'
        },
        {
            urlofImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedLAFa9nJuyll-XDD_t85fLhH2E43cMQWDg&s',
            lable: 'tcollage'
        },
        {
            urlofImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJKncgYFP-O8CwJz4o989Jx1TzcWf82CkRw&s',
            lable: 'logoName'
        },
        {
            urlofImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pb-qVaXaLJyJJAWV6jsx1yHQ-0iZS_PzAg&s',
            lable: 'tcollage'
        }
    ]
    const [images, setImages] = useState(arrOfImg);

    function handleNext() {
        setIsAutoPlay(false);
        setCounter(preNext => preNext + 1)
        if (counter === images.length - 1) {
            setCounter(0);
        }
    }

    function handlePrevBtn() {
        setIsAutoPlay(false);
        setCounter(preNext => preNext - 1)
        if (counter <= 0) {
            setCounter(images.length - 1);
        }
    };
    function toggleAutoPlay() {
        setIsAutoPlay((prevState) => !prevState);
      }

    useEffect(() => {
        if (!isAutoPlay) {
            return;
        }
        const newInterval = setInterval(() => {
            setCounter(preNext => preNext + 1)
            if (counter === images.length - 1) {
                setCounter(0)
            }
        }, 5000);

        return () => clearInterval(newInterval);
    }, [isAutoPlay,counter])


    return (
        <div className='sliderContainer'>
            <h1>Slider of home page {counter}</h1>
            <div className='imgSliderbox'>
                <img src={arrOfImg[counter].urlofImg} alt="" />
            </div>
            <div className='previousBtb' ><button onClick={handlePrevBtn}>previous</button></div>
            <div className='nextBtn'><button onClick={handleNext}>Next</button></div>
            <div>
               <button className='playPause'  onClick={toggleAutoPlay}> {isAutoPlay ? 'Pause' : 'Play'}</button>
            </div>
        </div>
    )
}

export default Slider
