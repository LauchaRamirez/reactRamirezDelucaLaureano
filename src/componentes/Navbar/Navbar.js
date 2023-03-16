import Button from '../Button/Button'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Laucha Ramirez</h1>
            <Button/>
            <CartWidget/>
        </nav>
    )
}
export default Navbar