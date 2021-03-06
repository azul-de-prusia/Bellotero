import React, { Fragment, useEffect } from 'react';
import Producto from './producto'

//redux
import {useSelector,useDispatch} from 'react-redux'
import { obtenerProductosAction} from '../actions/productoActions'

const Productos = () => {

     const dispatch =useDispatch()
     useEffect(()=>{
          //consultar api{}
          const cargarProductos = () =>dispatch( obtenerProductosAction() )
          cargarProductos()
     },[]
     )
     // obtener el state
     const productos = useSelector( state => state.productos.productos)
     //console.log(productos.productos)
     return (
          <Fragment>
          <h2 className="text-center my-5">Listado de Productos.js</h2>

          <table className="table table-striped">
               <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
               </thead>
               <tbody>
                   {productos.lenght === 0 ? 'no hay productos' : (
                        productos.map(producto => (
                             <Producto 
                             
                             producto={producto}
                             
                             />
                        ))
                   )}
               </tbody>
           </table>
          </Fragment>
     );
}

export default Productos;