import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

interface StarsReviewOwnProps {
    stars: number
}

const StarsReview: React.FC <StarsReviewOwnProps> = ({stars}) =>{
    const rating = stars;
    const _stars = [...Array(5)];

    return (
        <>
            {_stars.map((star, index) => {
                index += 1;
                return (
                    <span
                        key={index}
                        className={index <= rating ? "on rating-button" : "off rating-button"}>
                            <FontAwesomeIcon 
                                icon={faStar} 
                                size='1x'/>
                    </span>)})}
        </>
    )
}

export default StarsReview