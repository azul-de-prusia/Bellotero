import React from 'react';
import {Link} from 'react-router-dom';

const Producto = ({producto}) => {
     const {text, route} = producto
     return (
          <tr>
            
               <td><span className="font-weight-bolt">{route}</span></td>
               <td className="acciones">
                    <Link to={'/productos/editar/${text}'} className="btn btn-primary mr-2" >
                         editar
                    </Link>
                    <button type="button" className="btn btn-danger">eliminar</button>
                    
                    
               </td>
          </tr>
     );

}
export default Producto