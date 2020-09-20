import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

const Val = ({val}) => {
     const {text, route} = val
     return (
          <div  >
                    <ul >
                         <li >
                              <a  href={route}>{text} <span class="sr-only">(current)</span></a>
                         </li>
                    </ul>
          </div>
     );

}
export default Val