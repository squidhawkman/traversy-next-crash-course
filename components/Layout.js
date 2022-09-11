import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'


//this will wrap around our page components
const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <Nav />
    {/* we say styles.container because we imported it as styles */}
    <div className={styles.container}>
        <main className={styles.main}>
            <Header />
            {/* passing in the page components as children and displaying them */}
            {children}
            </main>
    </div>
    </>
  )
}

export default Layout