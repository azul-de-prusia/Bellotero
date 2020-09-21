//cada reducer tiene su propio state
import {
    
     COMENZAR_DESCARGA_REVIEW,
     DESCARGA_REVIEW_EXITO,
     DESCARGA_REVIEW_ERROR
     
 } from '../types';
const initialState = {
     reviews: [],
     error: null,
     loading: false
}

export default function(state = initialState, action){
     switch(action.type){
          case COMENZAR_DESCARGA_REVIEW:
               return {
                    
                    loading: action.payload
               }
          case DESCARGA_REVIEW_ERROR:
               return {
                    ...state,
                    loading: false,
                    error: action.payload
               }
          case DESCARGA_REVIEW_EXITO:
               return {
                    ...state,
                    loading: false,
                    error: null,
                    reviews: action.payload

               }
  
          default:
               return state;
     }
}