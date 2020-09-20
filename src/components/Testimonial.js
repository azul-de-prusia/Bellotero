import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { obtenerProductosAction} from '../actions/productoActions'
import Title from './page1';
import Review from './Review';

const Testimonial = () => {

     return (
         <div>
               <Title/>
               <Review/>
          </div>
     );
}

export default Testimonial;