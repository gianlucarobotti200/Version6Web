// Obtenemos los elementos relevantes del DOM
const equiposSection = document.querySelector('.equipos');
const playersSection = document.querySelector('.players');
const equipos = document.querySelectorAll('.equipo');

const arrayEquipos = [{
    equipo: "Apex Legends",
    jugadores: [{
        nombre: "Mauricio Ibacache",
        nickname: "ziggy",
        edad: 37,
        imagenUrl: "/img/manager-apex.jpeg",
        rol: "Manager deportivo"
    },
    {
        nombre: "Pitter",
        nickname: "Pitterz8",
        edad: 30,
        imagenUrl: "../img/player-apex1.jpeg",
        rol: "Catalyst, Bangalore, Wraith, Horizon, Wattson"
    },
    {
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/Apex Legends1.jpg",
        rol: ""
    },
    {
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/Apex Legends1.jpg",
        rol: ""
    }
    ],
},
{
    equipo: "Rocket League",
    jugadores: [{
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/rocketleague.jpg",
        rol: ""
    },
    {
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/rocketleague.jpg",
        rol: ""
    },
    {
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/rocketleague.jpg",
        rol: ""
    }
    ]
},
{
    equipo: "Creadores de contenido",
    jugadores: [{
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/cc3.jpg",
        rol: ""
    },
    {
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/cc3.jpg",
        rol: ""
    }
    ]
},
{
    equipo: "Staff",
    jugadores: [{
        nombre: "Nombre Apellido",
        nickname: "Nickname",
        edad: 20,
        imagenUrl: "/img/staff.jpg",
        rol: ""
    }
    ]
}
]

function renderPlayers(team) {
    // Filtrar el arrayEquipos para obtener el equipo seleccionado
    const equipoSeleccionado = arrayEquipos.find(equipo => equipo.equipo === team);

    // Limpiar la sección de jugadores antes de renderizar nuevos jugadores
    playersSection.innerHTML = '';

    // Iterar sobre los jugadores del equipo seleccionado y renderizar las cards
    equipoSeleccionado.jugadores.forEach(jugador => {
        const jugadorCard = `
            <article class="jugador-card">
                <img src="${jugador.imagenUrl}" alt="${jugador.nickname}">
                <h4>${jugador.nickname}</h4>
                <span>Nombre: ${jugador.nombre}</span>
                <span>Edad: ${jugador.edad}</span>
                <span>Rol: ${jugador.rol}</span>
            </article>
        `;
        playersSection.insertAdjacentHTML('beforeend', jugadorCard);
    });

    const jugadorCards = playersSection.querySelectorAll('.jugador-card');
    jugadorCards.forEach(card => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 100); // Retardamos la activación de la animación para que se aplique correctamente
    });
}

equipos.forEach(equipo => {
    equipo.addEventListener('click', () => {
        // Obtenemos el atributo data-team del equipo clicado
        const team = equipo.dataset.team;

        // Mostramos la sección de jugadores y ocultamos los equipos
        playersSection.style.display = 'flex';

        // Renderizamos los jugadores del equipo seleccionado
        renderPlayers(team);
    });
});

equipos.forEach(equipo => {
    equipo.addEventListener('click', () => {
        // Obtenemos el atributo data-team del equipo clicado
        const team = equipo.dataset.team;

        // Mostramos la sección de jugadores y ocultamos los equipos
        playersSection.style.display = 'flex';

        // Renderizamos los jugadores del equipo seleccionado
        renderPlayers(team);

        // Removemos la clase "equipo-selected" de todos los equipos
        equipos.forEach(equipo => equipo.classList.remove('equipo-selected'));

        // Agregamos la clase "equipo-selected" solo al equipo clicado
        equipo.classList.add('equipo-selected');
    });
});

// Función para renderizar los jugadores en un elemento <ul> existente
function renderJugadores(jugadores, ulElement) {
    jugadores.forEach((jugador) => {
        const liElement = document.createElement("li");
        liElement.textContent = jugador.nickname;
        ulElement.appendChild(liElement);
    });
}

// Obtener todos los elementos <ul> con clase "overlay-players"
const overlayPlayersLists = document.querySelectorAll(".overlay-players");

// Recorrer el arrayEquipos para buscar el equipo y renderizar los jugadores
arrayEquipos.forEach((equipo) => {
    // Buscar el elemento <ul> correspondiente al equipo
    const ulElement = Array.from(overlayPlayersLists).find(
        (element) => element.parentElement.querySelector("h3").textContent === equipo.equipo
    );

    // Renderizar los jugadores en el <ul> correspondiente
    if (ulElement) {
        renderJugadores(equipo.jugadores, ulElement);
    }
});

