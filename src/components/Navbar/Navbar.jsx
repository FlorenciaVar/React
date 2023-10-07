import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1>Cervecería Varela</h1>
            <section>
                <button>Clásicas</button>
                <button>Aromáticas</button>
                <button>Lupuladas</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar