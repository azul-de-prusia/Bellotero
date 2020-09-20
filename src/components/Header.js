
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { obtenerProductosAction} from '../actions/productoActions'
import Val from './Val'

const Header = () => {
     //const {text, route} = header
     const dispatch =useDispatch()
     useEffect(()=>{
          //consultar api{}
          const cargarProductos = () =>dispatch( obtenerProductosAction() )
          cargarProductos()
     },[]
     )
     // obtener el state
     const productos = useSelector( state => state.productos.productos)
     console.log(productos)
     return (
          <Fragment>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
               <a class="navbar-brand" href="#">Bellotero</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
               </button>
               
                         {
                         productos.lenght === 0 ? 'no hay productos' : (
                                   productos.map(val => (
                                        <Val 
                                        
                                        val={val}
                                        
                                        />
                                   ))
                              )}
                         
       
          </nav>
          </Fragment>
     );
}

export default Header;