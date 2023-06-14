import { useState } from 'react';
import { AppBar, Container, Grid, Toolbar, Typography} from '@mui/material';

import Link from "next/link"
import Image from 'next/image'



import stylos from './NavBar.module.css';
import Box from '@mui/material/Box';
import visionLogo from './images/asset5.png'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar () {

  const [visible, setVisible] = useState(false)


 
  return (
  
 <AppBar  position="fixed" className={stylos.Bar} > 
    <nav className={stylos.MenuBar}>
      <ul>
		<li>
<Image src={ visionLogo } alt="My Image"  width={ 400 } height={70}/>
		</li>
<div className={stylos.burgerMenuItems}>
<li>
   <MenuIcon className={stylos.burgerMenu} onClick={() => setVisible(!visible)} />
   <SearchIcon className={stylos.burgerMenu}/>
   <ShoppingCartIcon className={stylos.burgerMenu}/>
</li>
</div>
 <div  className={stylos.MenuOptions}>     
        

        <li>
          <Link href="/about" className={stylos.MenuOption}>
            Quienes Somos
          </Link>
        </li>
        <li>
          <Link href="/servicios" className={stylos.MenuOption} >
            Servicios 
          </Link>
        </li>
        <li>
          <Link href="/categorias" className={stylos.MenuOption}>
            Categorias 
          </Link>
        </li>
        <li>
            <Link href= '/tienda' className={stylos.MenuOption}> 
            Tienda
            </Link>
        </li>
        <li>
            <Link href= '/login' className={stylos.MenuOption}>
                 Mi cuenta 
            </Link>
        </li>
 </div>
      </ul>
    </nav>

{visible ? <div >

        <div  className={stylos.MenuOptionsVertical}>     
                       <li>
                  <Link href="/about" className={stylos.verticalMenu}>
                    Quienes Somos
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className={stylos.verticalMenu}>
                    Servicios 
                  </Link>
                </li>
                <li>
                  <Link href="/categorias" className={stylos.verticalMenu}>
                    Categorias 
                  </Link>
                </li>
                <li>
                    <Link href= '/tienda' className={stylos.verticalMenu}> 
                    Tienda
                    </Link>
                </li>
                <li>
                    <Link href= '/login' className={stylos.verticalMenu}>
                         Mi cuenta 
                    </Link>
                </li>
         </div>

</div> : null}

</AppBar>
  )
}


