import React,{useState,useEffect} from 'react';

const  Base= ()=> {
    const [nombre,setNombre] = useState("Luis")
    useEffect( ()=>{    // esta funcion se ejecuta automaticamente, no hay que llamarla
                          // es una funcion callback,despues del renderizado se ejecuta useEffect
        setTimeout( ()=>{
            setNombre("Rafael")
        },2000); // dos segundos
     });
        console.log(nombre)
  return (
    <div>
        <h1>Pagina de Base Ruta /</h1>
            {nombre}
    </div>
  );
}

export default Base;