import {
     AGREGAR_PRODUCTO,
     AGREGAR_PRODUCTO_EXITO,
     AGREGAR_PRODUCTO_ERROR,
     COMENZAR_DESCARGA_PRODUCTOS,
     DESCARGA_PRODUCTOS_EXITO,
     DESCARGA_PRODUCTOS_ERROR

 } from '../types'; 

 import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
import Productos from '../components/Productos';
import Header from '../components/Header'

 // crear nuevos productos

 export function crearNuevoProductoAction(producto){
     return async (dispatch) =>{
          dispatch( agregarProducto());

          try {

               // inserta en la API
              await clienteAxios.post('/productos', producto);

               //si todo bien actualizar el state
               dispatch( agregarProductoExito(producto) )
               //alerta
               Swal.fire(
                    'Correcto',
                    'Se agrego correctamente',
                    'Success'
               )
          } catch (error) {
               //console.log(error)
               // si error cambiar state

               dispatch( agregarProductoError(true) )
               //alerta
               Swal.fire({
                    icon: 'Error',
                    title: ' hubo un error',
                    text: 'Hubo un error'
               
               }
                    )
          }
          //console.log(producto)
     }

 }
 const agregarProducto = () => ({
     type: AGREGAR_PRODUCTO,
     payload: true

 })

 //si el producto se guarda en la bdd
const agregarProductoExito = producto => ({
     type: AGREGAR_PRODUCTO_EXITO,
     payload: producto
})
 // si hay error
 const agregarProductoError = estado=>({
     type: AGREGAR_PRODUCTO_ERROR,
     payload: estado

 })

 //descargar datos
 export function obtenerProductosAction(){
     return async (dispatch)  =>{
          dispatch( descargarProductos())
          try {
               const respuesta = await clienteAxios.get('/app.json')
               dispatch( descargarProductosExitosa(respuesta.data.menu.items))

               //console.log(respuesta.data.menu.items)
          } catch (error) {
               //console.log(error)
               dispatch( descargaProductosError())
          }
     }

 }
 const descargarProductos = () => ({
      type: COMENZAR_DESCARGA_PRODUCTOS,
      Payload: true
 })
 const descargarProductosExitosa = productos => ({
      type: DESCARGA_PRODUCTOS_EXITO,
      payload: productos
 })
 const descargaProductosError = () => ({
      type: DESCARGA_PRODUCTOS_ERROR,
      payload: true
 })


 //review
  //review
