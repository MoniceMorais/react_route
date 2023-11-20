import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/* Troca o componente e não faz o reload da página */}
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    )
}

export default Navbar
