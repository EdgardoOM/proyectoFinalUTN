const fotoUno = document.querySelector('.fotoUno'),
    fotoDos = document.querySelector('.fotoDos'),
    fotoTres = document.querySelector('.fotoTres'),
    fotoCuatro = document.querySelector('.fotoCuatro'),
    fotoCinco = document.querySelector('.fotoCinco');

    let contar = 1,
        mover = -100;

    setInterval(() => {
        if(mover > -400 && contar === 1){
            fotoUno.style.transform = `translateX(${mover}%)`;
            fotoDos.style.transform = `translateX(${mover}%)`;
            fotoTres.style.transform = `translateX(${mover}%)`;
            fotoCuatro.style.transform = `translateX(${mover}%)`;
            fotoCinco.style.transform = `translateX(${mover}%)`;
            mover = mover - 100;
            contar = 1;
        } else if (mover != 100){
            contar = 0;
            fotoUno.style.transform = `translateX(${mover}%)`;
            fotoDos.style.transform = `translateX(${mover}%)`;
            fotoTres.style.transform = `translateX(${mover}%)`;
            fotoCuatro.style.transform = `translateX(${mover}%)`;
            fotoCinco.style.transform = `translateX(${mover}%)`;
            mover = mover + 100;
            console.log(contar);
        }
        if (mover === -100){
            contar = 1;
        }
    }, 6000);

