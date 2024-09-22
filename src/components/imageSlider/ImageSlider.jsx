import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css'

const ImageSlider = ({ url }) => {

    const [picture, setPictures] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    console.log(picture)

    const fetchImages = async (getUrl) => {
        try {

            setLoading(true)
            const response = await fetch(getUrl)
            const imageData = await response.json()

            if (imageData) {
                setPictures(imageData)
                setLoading(false)
            }

        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url && url !== '') fetchImages(url)
    }, [url])


    if (loading) {
        return <div>Loading Please Wait</div>
    }

    if (error !== null) {
        return <div>error occurred ! {error}</div>
    }


    const slidePrev = () => {
        setCurrentSlide(currentSlide === 0 ? picture.length - 1 : currentSlide - 1)
    }
    const slideNext = () => {
        setCurrentSlide(currentSlide === picture.length - 1 ? 0 : currentSlide + 1)
    }


    return (
        <div>
            <div className=' slide-container '>
                <div className='arrow arrow-left'><BsArrowLeftCircleFill onClick={slidePrev} /></div>
                {
                    picture && picture.length ? picture.map((image, index) =>
                        <img
                            key={index}
                            src={image.download_url}
                            alt="slider-image"
                            className={`current-image ${currentSlide === index ? 'activeImage' : 'inactiveImage'}`}
                        />
                    )
                        :
                        null
                }
                <div className='arrow arrow-right'><BsArrowRightCircleFill onClick={slideNext} /></div>
            </div>
            <span className=' indicator' >
                {
                    picture && picture.length ? picture.map((image, index) =>
                        <button key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`indicator-btn ${currentSlide === index ? 'activeIndicator' : 'inactiveIndicator'}`}
                        >
                        </button>)
                        :
                        null
                }
            </span>
           
        </div>
    );
};

export default ImageSlider;
