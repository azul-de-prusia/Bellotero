
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { obtenerProductosAction} from '../actions/productoActions'
import Val from './Val'
import '../index.css';

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
          <nav class="navbar navbar-expand-lg navbar-light bg-white" >
          <img  src="https://i.ibb.co/HHDFCzQ/bellotero.png" srcset="https://i.ibb.co/bvYFh7D/bellotero-2x.png, https://i.ibb.co/6RfqZJ8/bellotero-3x.png " class="bellotero"className="bellotero"/>
               <button className="margin" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
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