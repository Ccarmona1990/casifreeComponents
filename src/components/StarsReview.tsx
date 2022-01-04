import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

interface StarOwnProps {
    color: string | undefined;
}

const Star: React.FC <StarOwnProps>= ({color})=>{
    return ( 
        <FontAwesomeIcon 
            icon={faStar} 
            size='1x'
            color={color}
            />
    )
}

interface StarsReviewOwnProps {
    stars: Array<any>
}

const StarsReview: React.FC<StarsReviewOwnProps> = ({stars}) =>{
    
    
    return (
        <>
            {stars.map(({star, color})=>{
                return (
                    <Star 
                    key={star} 
                    color={color}/>
                )
            })}
        </>
    )
}

export default StarsReview