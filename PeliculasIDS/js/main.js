async function getData() {
	var peliculasData;

	const res = await fetch('http://127.0.0.1:8080/pelicula/getPeliculasPorFecha')

	peliculasData = await res.json();

	console.log(peliculasData);

	//LLenado de pelis en más recientes ;D

	const contendorRecientes = document.getElementsByClassName('carousel');

	peliculasData.map((peliData => {
		let cardPeli = document.createElement('div');
		cardPeli.className = 'peliculas';
		let cardPeliA = document.createElement('a');
		cardPeliA.className = 'si';
		cardPeliA.href = '#';
		let cardPeliImg = document.createElement('img');
		cardPeliImg.src = peliData.urlImagen;

		let cardPeli2 = document.createElement('div');
		cardPeli2.className = 'peliculas-descripcion block-peli';
		let cardPeliH = document.createElement('h2');
		cardPeliH.textContent = peliData.nombre;
		let cardPeliP = document.createElement('p');
		cardPeliP.textContent = peliData.descripcion;

		cardPeliA.appendChild(cardPeliImg);
		cardPeli2.appendChild(cardPeliH);
		cardPeli2.appendChild(cardPeliP);
		cardPeliA.appendChild(cardPeli2);
		cardPeli.appendChild(cardPeliA)

		contendorRecientes[0].appendChild(cardPeli);

		cardPeli.addEventListener('mouseenter', (e) => {
			const elemento = e.currentTarget;
	
			setTimeout(() => {
				peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
				elemento.classList.add('hover');
				pelisInfo.forEach(peliInfo => peliInfo.classList.add('block-peli'))
				elemento.querySelector('.si').querySelector('.peliculas-descripcion').classList.remove('block-peli');
			}, 300);
		});

	}))


	const peliculas = document.querySelectorAll('.peliculas');
	const fila = document.querySelector('.contenedor-carousel');
	const pelisInfo = document.querySelectorAll('.peliculas-descripcion');

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
}


const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.nextSibling) {
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.previousSibling) {
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

document.addEventListener('DOMContentLoaded', function () {
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