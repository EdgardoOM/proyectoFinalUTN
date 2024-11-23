import React from 'react';

const ComentarioItem = (props) => {
    
    const { imagen, usuario, comentario } = props;

    return (
        
        <div className="comentario">
            <div className="fotoUsuario">
                <img src={imagen} alt="foto usuario"/>
            </div>
            <div className="datosUsuario">
                <p className="nombreUsuario">{usuario}</p>
                <p className="comentarioUsuario">{comentario}</p>
            </div>
        </div>
    );
};

export default ComentarioItem;