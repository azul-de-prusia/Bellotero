import React from 'react';
import {Link} from 'react-router-dom';

const Val = ({val}) => {
     const {text, route} = val
     return (
          <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                         <li class="nav-item active">
                              <a class="nav-link" href={route}>{text} <span class="sr-only">(current)</span></a>
                         </li>
                    </ul>
          </div>
     );

}
export default Val