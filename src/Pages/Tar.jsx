import Tarjeta from "../Orquestador/Tarjeta";
import Boton from "../Componentes/Tarjetas/Boton";

export default function Tar({tarjeta}) {
  return (
    <div>
      <header className="hero">
        <h1>GALERÍA DE ARTE</h1>
      </header>

      <div className="productos">
        {tarjeta.map((obra) => (
            <Tarjeta
               key={obra.title}
               title={obra.title}
               descripcion={obra.descripcion}
               color={obra.color}
               img={obra.img}
            />
       ))}
       </div>
       <Boton/>
    </div>
 )   
}

