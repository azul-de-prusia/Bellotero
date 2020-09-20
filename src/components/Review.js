import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { obtenerProductosAction} from '../actions/productoActions'


const Review = () => {

     return (
         
          <div className="review">
                 
                    <ul >
                         <li >
                         <p className="name">Nombre</p>
                         </li>
                         <li>
                         <p className="nickname">Nombre gris</p>
                         </li>
                    </ul>
          
                    <ul>
                         <li>
                         <p className="opinion">“It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"</p>
                         </li>
                    </ul>
     
          
          </div>
     );
}

export default Review;