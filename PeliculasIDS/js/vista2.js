async function init() {
    const video = document.getElementsByClassName('video');

    const searchParams = new URLSearchParams(window.location.search);

    var id = searchParams.get('id');
    
    video[0].src = searchParams.get('video');

    const res = await fetch('http://127.0.0.1:8080/pelicula/getItemById/' + id)

    var pelicula = await res.json();

    const main = document.querySelector('.main');

    var miFecha = new Date(pelicula.fechaLanzamiento);

    const dia = miFecha.getDate();
    const mes = miFecha.getMonth() + 1; // Los meses comienzan desde 0
    const año = miFecha.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`;

    // Crear el contenedor principal
    const container = document.createElement("div");
    container.className = "Desc-justify";

    // Crear el título
    const title = document.createElement("span");
    title.className = "title-desc";
    title.textContent = pelicula.nombre;

    // Agregar el título al contenedor principal
    container.appendChild(title);

    // Crear el segundo contenedor
    const container2 = document.createElement("div");
    container2.className = "Desc-justify";

    // Crear el párrafo de descripción
    const descripcion = document.createElement("a");
    descripcion.className = "Descripcion";
    descripcion.textContent = pelicula.descripcion;
    // Agregar el párrafo de descripción al segundo contenedor
    container2.appendChild(descripcion);

    // Crear el tercer contenedor
    const container3 = document.createElement("div");
    container3.className = "Desc-justify";

    // Crear la etiqueta de "Fecha de lanzamiento"
    const lanzamiento = document.createElement("span");
    lanzamiento.className = "Lanzamiento";
    lanzamiento.textContent = fechaFormateada;

    // Crear la línea horizontal
    const linea = document.createElement("hr");
    linea.className = "linea";

    // Crear el contenedor de ranking
    const ranking = document.createElement("div");
    ranking.className = "Ranking";

    // Crear el ícono de trofeo
    const trofeo = document.createElement("span");
    trofeo.className = "material-symbols-outlined";
    trofeo.textContent = "trophy";

    // Crear el contenedor de posición de ranking
    const rankPosition = document.createElement("div");
    rankPosition.className = "Rank-position";

    // Crear el enlace de texto de ranking
    const rankText = document.createElement("a");
    rankText.className = "Rank-text";
    rankText.textContent = "RANKING " + pelicula.ranking;

    // Agregar el ícono de trofeo al contenedor de ranking
    ranking.appendChild(trofeo);

    // Agregar el enlace de texto de ranking al contenedor de posición de ranking
    rankPosition.appendChild(rankText);

    // Agregar el contenedor de posición de ranking al contenedor de ranking
    ranking.appendChild(rankPosition);

    // Crear el contenedor de reproducción
    const reproducir = document.createElement("div");
    reproducir.className = "Reproducir";

    // Crear el ícono de reproducción
    const playIcon = document.createElement("span");
    playIcon.className = "material-symbols-outlined";
    playIcon.textContent = "play_circle";

    // Crear el contenedor de posición de reproducción
    const reproducirPosition = document.createElement("div");
    reproducirPosition.className = "Reproducir-position";

    // Crear el enlace de texto de reproducción
    const reproducirText = document.createElement("a");
    reproducirText.className = "Rank-text";
    reproducirText.textContent = "Reproducir";

    // Agregar el ícono de reproducción al contenedor de reproducción
    reproducir.appendChild(playIcon);

    // Agregar el enlace de texto de reproducción al contenedor de posición de reproducción
    reproducirPosition.appendChild(reproducirText);

    // Agregar el contenedor de posición de reproducción al contenedor de reproducción
    reproducir.appendChild(reproducirPosition);

    // Agregar todos los elementos al tercer contenedor
    container3.appendChild(lanzamiento);
    container3.appendChild(linea);
    container3.appendChild(ranking);
    container3.appendChild(reproducir);

    // Agregar todos los contenedores al documento (al cuerpo del HTML, por ejemplo)
    main.appendChild(container);
    main.appendChild(container2);
    main.appendChild(container3);

}