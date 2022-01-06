import React from 'react'
import StarsReview from './StarsReview'
import TextReview from './TextReview'
import UserReview from './UserInfoReview'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import '../style.scss'

interface RatingCardOwnProps {
    stars: number;
    review: string | undefined;
    img: string | undefined;
    username: string | undefined;
}

const RatingCard: React.FC <RatingCardOwnProps> = ({stars,review, img, username}) => {
    
    return (
        <div 
        className='w-50 px-4 py-3 bg-light rounded-5 m-3'
        style={{maxWidth:'250px'}}>
            <section>
                <StarsReview 
                stars={stars}/>
            </section>

            <section>
                <TextReview 
                review={review}/>
            </section>

            <section className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center '>
                    <img className='Review-customer-profilePic' src={img} alt="userPic" />

                    <h6 className='font-weight-bold text-capitalize my-0 mx-2'>{username}
                    </h6>
                </div>

                <button 
                className='border-0 rounded-circle bg-transparent '>
                    <FontAwesomeIcon 
                        className='nextUser'
                        icon={faArrowCircleRight}
                        size='2x'/>

                </button>
            </section>
        </div>
    )
}

export default RatingCard
