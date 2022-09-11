import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

//put this in layout because we want these links to be on every page

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
    <ul>
        <li>
<Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/about'>About</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Nav