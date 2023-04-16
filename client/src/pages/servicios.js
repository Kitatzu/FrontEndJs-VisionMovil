import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import ServiciosComponent from "@/components/ServiciosComponent";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });


export default function Servicios() {
  return (
<div>

<div>
	<NavBar />
	<ServiciosComponent />
	<Footer />
</div>

</div>
  
)}
