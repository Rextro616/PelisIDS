document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('track');
    const imagenes = Array.from(document.getElementsByClassName('carrusel'));

    let index = 2;

    function showImagen() {
        imagenes.forEach(imagen => {
            imagen.classList.remove('active');
        });
        imagenes[index].classList.add('active');
    }

    function siguienteImagen() {
        imagenes[index].classList.remove('active');
        index = (index + 1) % imagenes.length;
        imagenes[index].classList.add('active');
    }

    function anteriorImagen() {
        imagenes[index].classList.remove('active');
        index = (index - 1 + imagenes.length) % imagenes.length;
        imagenes[index].classList.add('active');
    }

    const buttonPrev = document.createElement('button');
    buttonPrev.classList.add('carrusel-prev');
    buttonPrev.innerHTML = '<';
    buttonPrev.addEventListener('click', anteriorImagen);

    const buttonNext = document.createElement('button');
    buttonNext.classList.add('carrusel-next');
    buttonNext.innerHTML = '>';
    buttonNext.addEventListener('click', siguienteImagen);

    track.parentElement.appendChild(buttonPrev);
    track.parentElement.appendChild(buttonNext);

    showImagen();
});
