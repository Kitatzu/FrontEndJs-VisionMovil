import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import TiendaFrame from "@/components/TiendaFrame";



export default function Tienda() {
  return (
<div style={{marginTop: "170px"}}>
<NavBar />
		<h1>Tienda</h1>

<select name="filters" id="filtro_products">
    <option value="default">Orden Predeterminado</option>
    <option value="popularity">Ordenar por popularidad</option>
    <option value="mediaScore">Ordenar por calificacion media</option>
    <option value="last">Ordenar por las Ultimas</option>
    <option value="downtohight">Ordenar por precio: bajo a alto</option>
    <option value="hightodown">Ordenar por precio: alto a bajo</option>
  </select>

<TiendaFrame/>

<Footer/>
</div>
)
}
