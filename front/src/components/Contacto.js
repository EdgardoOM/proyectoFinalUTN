const Contacto = (props) => {
    return (
        <>
            <section className="contacto" id="contacto">
                <div className="contenedorSitio">
                    <div className="contactoFoto">
                        <img src="img/Contacto.jpg" alt="foto contacto"/>
                        <div className="cuadroContacto">
                            <p className="tituloBlanco">Contacto</p>
                            <p className="descripcionBlanco">calle abc 458.</p>
                            <p className="descripcionBlanco">ciudad Pergamino.</p>
                            <p className="descripcionBlanco">2477-123456789.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="formulario">
                <p className="titulo">Dejanos un mensaje.</p>
                <div className="contenedorSitio">
                    <form action="">
                        <div className="formIzq">
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                            <input type="number" name="celular" id="celular" placeholder="Celular"/>
                            <input type="email" name="email" id="email" placeholder="E-mail"/>
                        </div>
                        <div className="formDrcha">
                            <textarea name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>
                        </div>
                        <input type="submit" value="Enviar" id="btnEnviar"/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contacto;