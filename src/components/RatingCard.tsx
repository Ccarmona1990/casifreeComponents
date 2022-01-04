import React from 'react'
import StarsReview from './StarsReview'
import TextReview from './TextReview'
import UserReview from './UserReview'


interface RatingCardOwnProps {
    stars: Array<any>;
    review: string | undefined;
    img: string | undefined;
    username: string | undefined;
}

const RatingCard: React.FC <RatingCardOwnProps> = ({stars,review, img, username}) => {
    
    return (
        <div className='w-25 px-4 py-3 bg-light rounded-5 m-3'>
            <section>
                <StarsReview 
                stars={stars}/>
            </section>

            <section>
                <TextReview 
                review={review}/>
            </section>

            <section>
                <UserReview 
                img={img} 
                username={username} />
            </section>
        </div>
    )
}

export default RatingCard
