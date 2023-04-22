import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Main from "@/components/Main";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div>
	<NavBar />
	<Main />
	<Footer />
</div>
)}
