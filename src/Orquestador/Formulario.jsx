import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import Tarjeta from "./Tarjeta";
import "../Style/Formulario.css";

const Entradas=[
    {nombre:"titulo", tipo:"text", placeholder:"Titulo"},
    {nombre:"imagen", tipo:"text", placeholder:" imagen"},
    {nombre:"descripcion", tipo:"text", placeholder:"Descripción"},
    {nombre:"color", tipo:"text", placeholder:"Color"}
]

export default function Formulario({datos, onCambio, onEnviar, onReset, onVolver}) {
    const Botones=[
    {tipo:"submit", nombre:"Enviar"},
    {tipo:"button", nombre:"Volver", onClick:onVolver},
    {tipo:"reset", nombre:"Reset"}
]
    return (
        <div className="pagina-formulario">

            <form onSubmit={onEnviar} onReset={onReset} className="formulario">
                {Entradas.map((campos)=>(
                    <Campos
                        key={campos.nombre}
                        etiqueta={campos.nombre}
                        nombre={campos.nombre}
                        tipo={campos.tipo}
                        placeholder={campos.placeholder}
                        valor ={datos[campos.nombre]}
                        onCambio={onCambio}
                    />
                ))}
                {Botones.map((boton)=>( 
                   <Boton
                    key={boton.nombre}
                    tipo={boton.tipo}
                    nombre={boton.nombre}
                    onClick={boton.onClick}
                   />
                ))}
               
            </form>
            <Tarjeta
              title={datos.titulo}
              descripcion={datos.descripcion}
              img={datos.imagen}
              color={datos.color}
              />
        </div>
    )
}