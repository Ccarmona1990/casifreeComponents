import React from 'react';
import UserReview from './UserReviewCard-components/UserReviewCard';
import RatingSystem from './Rating-system-components/RatingSystem';
import {users} from './users'
import './style.scss';
import { useSelector } from 'react-redux';


const App: React.FC = ()=> {
  const reviewedStars = useSelector((state: any)=>state.rating.stars)
  
  return (
    <div className='container'>
      {users.map(({userID, img, reviewMessage, stars, username})=>{
        
        return (
          <UserReview
          key={userID} 
          stars={reviewedStars}
          review={reviewMessage}
          img={img}
          username={username}
          />
        )
      })}
      <RatingSystem/>
    </div>
  );
}

export default App;
