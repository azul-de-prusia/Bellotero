import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import reviewsReducer from './reviewsReducer'


export default combineReducers({
     productos: productosReducer,
     reviews: reviewsReducer
})