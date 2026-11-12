import { useState } from "react";
import { useNavigate } from "react-router-dom";


const inicial={titulo:'', imagen:'', descripcion:'', color:'' }
export default function useFormulario({agregar}) {
    const navigate=useNavigate()
    const [datos,setDatos]=useState(inicial)
    const cambiar=(e)=>{
        setDatos({...datos,[e.target.name]:e.target.value})
    }
    const enviar=(e)=>{
        e.preventDefault()
        agregar({
            title:datos.titulo,
            img:datos.imagen,
            descripcion:datos.descripcion,
            color: datos.color
        })
        navigate('/Tar')
    }
    return{
            datos,
            onCambio: cambiar,
            onEnviar: enviar,
            onReset:()=>setDatos(inicial),
            onVolver:()=>navigate('/Tar')
        }
}