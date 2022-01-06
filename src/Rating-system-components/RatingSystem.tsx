import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { _rating } from '../redux/ducks/stars';

const RatingSystem = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const stars = [...Array(5)];
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        return () => {
            dispatch(_rating(rating))
        }
    })

    return (
        <>
            {stars.map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on rating-button" : "off rating-button"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}>

                        <span className="star">
                            <FontAwesomeIcon 
                                icon={faStar} 
                                size='1x'/>
                        </span>
                    </button>
                );
            })}
        </>
    );
};

export default RatingSystem
