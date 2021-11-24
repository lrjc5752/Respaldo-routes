import React from 'react';
import {useParams} from 'react-router-dom' //recoge dentro de las 
                                        //rutas todo lo que venga despues de la ruta inicial

const  Inicio= ()=> {
    const {id,edad,nombre} = useParams();
  return (
    <div>
        <h1>Pagina de Inicio</h1>
        <p>{id}</p>
        <p>{nombre}</p>
        <p>{edad}</p>
    </div>
  );
}

export default Inicio;
