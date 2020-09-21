import {

     COMENZAR_DESCARGA_REVIEW,
     DESCARGA_REVIEW_EXITO,
     DESCARGA_REVIEW_ERROR

 } from '../types'; 

 import clienteAxios from '../config/axios';

import Testimonial from '../components/Testimonial'

 // crear nuevos productos



 //review
 export function obtenerReviewAction(){
     return async (dispatch)  =>{
          dispatch( descargarReview())
          try {
               const respuesta = await clienteAxios.get('/page1.json')
               dispatch( descargarReviewExitosa(respuesta.data.slider))
               //console.log(respuesta)
          } catch (error) {
               //console.log(error)
               dispatch( descargaReviewError())
          }
     }

 }
 const descargarReview = () => ({
      type: COMENZAR_DESCARGA_REVIEW,
      Payload: true
 })
 const descargarReviewExitosa = reviews => ({
      type: DESCARGA_REVIEW_EXITO,
      payload: reviews
 })
 const descargaReviewError = () => ({
      type: DESCARGA_REVIEW_ERROR,
      payload: true
 })