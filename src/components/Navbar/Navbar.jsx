import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}>Cervecería Varela</h1>
            <section>
                <NavLink to='/category/Clásicas' className={({ isActive }) => isActive ? classes.active : ''}>Clásicas</NavLink>
                <NavLink to='/category/Aromáticas' className={({ isActive }) => isActive ? classes.active : ''}>Aromáticas</NavLink>
                <NavLink to='/category/Lupuladas' className={({ isActive }) => isActive ? classes.active : ''}>Lupuladas</NavLink>
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar