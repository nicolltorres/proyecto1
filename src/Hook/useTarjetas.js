import { useState } from "react";
import obras from '../data.json'

export default function useTarjetas(){
    const [tarjeta, setTarjeta]=useState(obras)
    const agregar=(nueva)=>setTarjeta([...tarjeta,nueva])
    return {tarjeta, agregar}
}