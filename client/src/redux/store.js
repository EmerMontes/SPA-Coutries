import {configureStore} from '@reduxjs/toolkit'

//import {  applyMiddleware, compose } from 'redux';
//import thunkMiddleware from 'redux-thunk'
//import reducer from './reducer'
//import thunk from 'redux-thunk';

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea sirve para conectar nuestra App con la extensión REDUX DEVTOOLS DEL NAVEGADOR
//composeEnhancer(applyMiddleware(thunkMiddleware)) // esta línea sirve para que podamos hacer peticiones a una Api/servidor


const store = configureStore({
    reducer:{
        
    }
});



export default store;