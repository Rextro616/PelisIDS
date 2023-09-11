const contendorRecientes = document.getElementsByClassName('carousel');

async function getData() {

	//LLenado de pelis en más recientes ;D

	const res = await fetch('http://127.0.0.1:8080/pelicula/getPeliculasPorFecha')

	var peliculasData1 = await res.json();

	mapeado(peliculasData1, 0);

	//Llenado de pelis 

	const res2 = await fetch('http://127.0.0.1:8080/pelicula/getAllPeliculas/pelicula')

	var peliculasData2 = await res2.json();

	mapeado(peliculasData2, 1);

	//Llenado de series

	const res3 = await fetch('http://127.0.0.1:8080/pelicula/getAllPeliculas/serie')

	var peliculasData3 = await res3.json();

	mapeado(peliculasData3, 2);

	//------------------------------------------------------------------

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

function mapeado(peliculasData, i){

	peliculasData.map((peliData => {
		let cardPeli = document.createElement('div');
		cardPeli.className = 'peliculas';
		let cardPeliA = document.createElement('a');
		cardPeliA.className = 'si';
		cardPeliA.href = peliData.urlPagina;
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

		contendorRecientes[i].appendChild(cardPeli);

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

