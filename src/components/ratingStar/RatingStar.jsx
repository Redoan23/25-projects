import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './ratingStar.css'

const RatingStar = ({ numberOfStar = 5 }) => {

    const [rating, setRating] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState(0)
    console.log('rating', rating)
    console.log('hoveredIndex', hoveredIndex)


    const handleClick = (getIndex) => {
        setRating(getIndex)
    }

    const handleMouseOver = (getIndex) => {
        setHoveredIndex(getIndex)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(rating)
    }

    return (
        <div className="starRating" style={{ display: 'flex', gap: 2 }}>
            {
                [...Array(numberOfStar)].map((_, index) => {
                    index += 1
                    return <FaStar
                        size={50}
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseOver(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className={ index <= (hoveredIndex || rating)  && 'active'}
                    />
                }
                )
            }
        </div>
    );
};

export default RatingStar;