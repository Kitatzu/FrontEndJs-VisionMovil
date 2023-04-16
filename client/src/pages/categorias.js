import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import CategoriasComponent from "@/components/CategoriasComponent";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Categorias() {
  return (
<div>

<div>
	<NavBar />
	<CategoriasComponent />
	<Footer />
</div>

</div>

  	
  )}
