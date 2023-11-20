import './Navbar.css';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/* Troca o componente e não faz o reload da página */}
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}

            {/* NavLink é mais apropriado para utilizar o link ativo */}
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar
