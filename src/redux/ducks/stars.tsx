
const initialState = {
    stars: 0
}

const RATING = 'rating';

export const _rating = (value: any)=>({type: RATING, payload: value})

export const ratingReducer = (state = initialState, action: any)=>{
    switch(action.type){
        case RATING:
            return {...state, stars: action.payload}
        default:
            return state
    }
}

