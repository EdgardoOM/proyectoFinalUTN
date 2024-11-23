const Nav = (props) => {
    return (
        <>
            <aside className="panel">
                <nav className="menu">
                    <a className="menuE" href="#">Inicio</a>
                    <a className="menuE" href="#nosotros">Nosotros</a>
                    <a className="menuE" href="#productos">Productos</a>
                    <a className="menuE" href="#redes">Redes Sociales</a>
                    <a className="menuE" href="#comunidad">Nuestra Comunidad</a>
                    <a className="menuE" href="#contacto">Contacto</a>
                </nav>
            </aside>
            <nav>
                <button className="panel-btn hamburger--elastic" type="button">
                    <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    </span>
                </button>
            </nav>
        </>
    );
}

export default Nav;