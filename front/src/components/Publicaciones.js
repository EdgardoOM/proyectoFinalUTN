import { useState, useEffect } from 'react';
import axios from 'axios';
import PublicacionItem from '../components/publicaciones/PublicacionItem';

const Publicaciones = (props) => {

    const [loading, setLoading] = useState(false);
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const cargarPublicaciones = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/publicaciones');
            setPublicaciones(response.data);
            setLoading(false);
        };
        cargarPublicaciones();
    }, []);

    return (
        <>
        <section className="publicaciones" id="redes">
            <div className="contenedorSitio">
                <div className="titulo">Ultimas publicaciones en nuestras redes.</div>
                <div className="descripcion">No te pierdas nuestras publicaciones, habrá promos, sorteos, adelantos de lo que viene...</div>
                <div className="contenedorPublicaciones">
                        {
                            loading ? (
                                <p>Cargando...</p>
                            ) : (
                                publicaciones.map(item => <PublicacionItem key = {item.id}
                                    imagen = {item.imagen}
                                    descripcion = {item.descripcion_publicacion}/>)
                                )
                        }
                </div>
            </div>
        </section>
        </>
    )
};

export default Publicaciones;