import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

interface UserReviewOwnProps {
    img: string | undefined;
    username: string | undefined;
}

const UserReview: React.FC <UserReviewOwnProps>= ({img, username}) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
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
        </div>
    )
}

export default UserReview
