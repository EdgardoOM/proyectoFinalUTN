import { useState, useEffect } from 'react';
import axios from 'axios';
import ComentarioItem from '../components/comentarios/ComentarioItem';

const Comentarios = (props) => {

    const [loading, setLoading] = useState(false);
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const cargarComentarios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/comentarios');
            setComentarios(response.data);
            setLoading(false);
        };
        cargarComentarios();
    }, []);

    return (
        
            <>
                <section className="comentarios" id="comunidad">
                    <div className="contenedorSitio">
                        <p className="titulo">Nuestra comunidad dice...</p>
                        <p className="descripcion">Esperamos tu opinión, sugerencia, para mejorar y brindarte siempre lo mejor.</p>
                        <div className="contenedorComentarios">
                        {
                            loading ? (
                                <p>Cargando...</p>
                            ) : (
                                    comentarios.map(item => <ComentarioItem key = {item.id}
                                    imagen = {item.imagen}
                                    usuario = {item.usuario_comentario}
                                    comentario = {item.comentario_comentario}/>)
                                )
                        }
                            {/* <div className="comentario">
                                <div className="fotoUsuario">
                                    <img src="" alt="foto usuario"/>
                                </div>
                                <div className="datosUsuario">
                                    <p className="nombreUsuario">Usurario</p>
                                    <p className="comentarioUsuario">comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </>
        //         
        // 
    )
}

export default Comentarios;