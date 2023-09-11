const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.peliculas');
const pelisInfo= document.querySelectorAll('.peliculas-descripcion');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});


peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;

		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
            pelisInfo.forEach(peliInfo => peliInfo.classList.add('block-peli'))
            elemento.querySelector('.si').querySelector('.peliculas-descripcion').classList.remove('block-peli');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    pelisInfo.forEach(peliInfo => peliInfo.classList.add('block-peli'))
});
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
