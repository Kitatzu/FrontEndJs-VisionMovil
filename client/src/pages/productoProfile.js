import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import TabPanel from "@/components/ProductProfile";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });


export default function productoProfile(props) {
  return (
<div>

<div>
	<NavBar />
	<TabPanel />
	<Footer />
</div>

</div>
  
)}
