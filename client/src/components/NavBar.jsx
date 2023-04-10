import Link from "next/link"

export default function NavBar () {
 
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  )
}


