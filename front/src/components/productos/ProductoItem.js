import React from 'react';

const ProductoItem = (props) => {
    
    const { imagen, nombre, descripcion, precio } = props;

    return (
        
                    <div className="producto">
                        <div className="fotoProducto">
                            <img src={imagen} alt="producto"/>
                        </div>
                        <p classNAme="tituloProducto">{nombre}</p>
                        <p className="descripcionProducto">{descripcion}</p>
                        <p className="precioProducto">{precio}</p>
                        <a href="#" class="botonComprar">Comprar</a>
                    </div>
    );
};

export default ProductoItem;