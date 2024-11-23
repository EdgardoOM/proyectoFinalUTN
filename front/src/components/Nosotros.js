const Nosotros = (props) => {
    return (        
        <section className="nosotros" id="nosotros">
        <div className="contenedorSitio">
            <h2 className="titulo">Un poco de nosotros.</h2>
            <p class="descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore cum consequatur illum culpa debitis eveniet pariatur laudantium voluptas nobis necessitatibus repellat! Fugiat velit eligendi accusamus adipisci enim numquam necessitatibus.
                Reprehenderit obcaecati quo iure, ab, dolore assumenda doloremque minima suscipit delectus nisi fuga, quibusdam corporis corrupti aperiam ex totam! Voluptatum, exercitationem. Maiores corporis eos animi libero dolorum nostrum, numquam quae.</p>
            <div className="contenedorTrabajamos">
                <div className="cuadroTrabajamos">
                    <h2 className="tituloBlanco">Así trabajamos.</h2>
                    <p className="descripcionBlanco">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore cum consequatur illum culpa debitis eveniet pariatur laudantium voluptas nobis necessitatibus repellat! Fugiat velit eligendi accusamus adipisci enim numquam necessitatibus.</p>
                </div>
                <div className="fotosTrabajamos">
                    <img src="img/Galeria 1.jpg" alt="foto como trabajamos" class="fotoTrabajos fotoUno"/>
                    <img src="img/Galeria 2.jpg" alt="foto como trabajamos" class="fotoTrabajos fotoDos"/>
                    <img src="img/Galeria 3.jpg" alt="foto como trabajamos" class="fotoTrabajos fotoTres"/>
                    <img src="img/Galeria 4.jpg" alt="foto como trabajamos" class="fotoTrabajos fotoCuatro"/>
                    <img src="img/Galeria 1.jpg" alt="foto como trabajamos" class="fotoTrabajos fotoCinco"/>
                </div>    
            </div>
        </div>
    </section>
    )
}

export default Nosotros;