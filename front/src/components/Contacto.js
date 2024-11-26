import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        celular: '',
        mensaje: ''
    }

    const [ sending, setSending ] = useState(false);
    const [ msg, setMsg ] = useState('');
    const [ formData, setFormData ] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false) {
            setFormData(initialForm)
        }
    }

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
                    <form action="/contacto" method='post' onSubmit={handleSubmit}>
                        <div className="formIzq">
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange}/>
                            <input type="number" name="celular" id="celular" placeholder="Celular" value={formData.celular} onChange={handleChange}/>
                            <input type="email" name="email" id="email" placeholder="E-mail" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className="formDrcha">
                            <textarea name="mensaje" id="mensaje" placeholder="Mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </div>
                        <input type="submit" value="Enviar" id="btnEnviar"/>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </div>
            </section>
        </>
    )
}

export default Contacto;