
import axios from 'axios'


const clienteAxios = axios.create({
     baseURL: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/'
})

export default clienteAxios;
//http://localhost:5000/productos