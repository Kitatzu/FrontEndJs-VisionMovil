import { AppBar, Container, Grid, Toolbar, Typography} from '@mui/material';

import Link from "next/link"
import Image from 'next/image'


import stylos from './NavBar.module.css';
import Box from '@mui/material/Box';
import visionLogo from './images/asset5.png'


export default function NavBar () {


 
  return (
  
 <AppBar  position="fixed" className={stylos.Bar} > 
    <nav className={stylos.MenuBar}>
      <ul>
		<li>
<Image src={ visionLogo } alt="My Image"  width={ 400 } height={70} />
		</li>

 <div  className={stylos.MenuOptions}>     
        <li>
          <Link href="/about">
            Quienes Somos
          </Link>
        </li>
        <li>
          <Link href="/servicios">
            Servicios 
          </Link>
        </li>
        <li>
          <Link href="/categorias">
            Categorias 
          </Link>
        </li>
        <li>
            <Link href= '/tienda'> 
            Tienda
            </Link>
        </li>
        <li>
            <Link href= 'account'>
                 Mi cuenta 
            </Link>
        </li>
</div>

      </ul>
    </nav>
</AppBar>
  )
}


