import UserReview from "../UserReviewCard-components/UserReviewCard";
import { users } from "../users";


export default {
    title: "reviewCard",
    component: UserReview
}

export const reviewCard = () => {
    return (
        users.map(({userID, img, reviewMessage, stars, username})=>{
            return (
                <UserReview
                key={userID} 
                stars={stars}
                review={reviewMessage}
                img={img}
                username={username}
                />
        )})
    )
}
