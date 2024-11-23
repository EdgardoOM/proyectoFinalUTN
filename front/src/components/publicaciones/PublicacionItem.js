import React from 'react';

const PublicacionItem = (props) => {
    
    const { imagen, descripcion } = props;

    return (
        
                    <div className="publicacion">
                        <div>
                            <img src={imagen} alt="Publicacion"/>
                        </div>
                        <p className="descripcionPublicacion">{descripcion}</p>
                    </div>
    );
};

export default PublicacionItem;