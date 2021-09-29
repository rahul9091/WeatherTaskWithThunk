import {GET_DATA} from '../types';

const initialState = {
    images:[],
    bulkImage:[],
    weatherData:[]
}

export default function booksReducer(state=initialState,action){
    switch(action.type){
        
        case GET_DATA:
       
            const weatherInfo = action.payload
            console.log(weatherInfo,'weatherInfo')
            
            return{
                ...state,
                weatherData:weatherInfo
            }
        default:
            return {
                ...state
            }
            
    }
}