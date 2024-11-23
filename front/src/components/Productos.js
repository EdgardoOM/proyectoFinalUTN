import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';

const Productos = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);

    return (
                    <>
                    <section className="productos" id="productos">
                        <div className="contenedorSitio">
                            <h2 className="titulo">Lo que tenemos para ofrecerte.</h2>
                            <p className="descripcion">Encuentra nuestros productos.</p>
                            <div className="contenedorProductos">
                                {
                                    loading ? (
                                        <p>Cargando...</p>
                                    ) : (
                                        productos.map(item => <ProductoItem key = {item.id}
                                            imagen = {item.imagen}
                                            nombre = {item.nombre_producto}
                                            descripcion = {item.descripcion_producto}
                                            precio = {item.precio_producto}/>)
                                        )
                                }
                        </div>
                    </div>
                    </section>
                    </>
    )
};

export default Productos;