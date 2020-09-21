import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { obtenerReviewAction} from '../actions/reviewActions'
import Title from './page1';
import Review from './Review';
import '../index.css';

const Testimonial = () => {
     const dispatch =useDispatch()
     useEffect(()=>{
          //consultar api{}
          const cargarReview = () =>dispatch( obtenerReviewAction() )
          cargarReview()
     },[]
     )
     // obtener el state
     const reviews = useSelector( state => state)
     const reviewsj = JSON.stringify(reviews.reviews.reviews)
     console.log(typeof reviewsj)
     return (
          <Fragment>
         <nav>

                                        <Title 
                                        
                                       
                                        
                                        />
                              
               
           
                                        <Review 
                                        
                                        
                                        />
                          
                    
          </nav>
          </Fragment>
     );
}

export default Testimonial;