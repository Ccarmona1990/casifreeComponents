import React from 'react';
import RatingCard from './components/RatingCard';
import {users} from './users'
import './style.scss';

function App() {
  return (
    <div className='container'>
      {users.map(({userID, img, reviewMessage, stars, username})=>{
        return (
          <RatingCard
          key={userID} 
          stars={stars}
          review={reviewMessage}
          img={img}
          username={username}
          />
        )
      })}
    </div>
  );
}

export default App;
