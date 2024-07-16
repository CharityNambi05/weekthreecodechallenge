const films = [
  {
    id: "1",
    title: "The Giant Gila Monster",
    runtime: "108",
    capacity: 30,
    showtime: "04:00PM",
    tickets_sold: 27,
    description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },
  {
    id: "2",
    title: "Manos: The Hands Of Fate",
    runtime: "118",
    capacity: 50,
    showtime: "06:45PM",
    tickets_sold: 44,
    description: "A family gets lost on the road and stumbles upon a hidden, underground,  cult led by the fearsome Master and his servant Torgo.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
  },
  {
    id: "3",
    title: "Time Chasers",
    runtime: "93",
    capacity: 50,
    showtime: "09:30PM",
    tickets_sold: 31,
    description: "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
  }
];

function displayFilms(films) {
  const filmContainer = document.getElementById('film-container');

  films.forEach(film => {
    const filmDiv = document.createElement('div');
    filmDiv.className = 'film';

    filmDiv.innerHTML = `
      <h2>${film.title}</h2>
      <img src="${film.poster}" alt="${film.title}">
      <p><strong>Showtime:</strong> ${film.showtime}</p>
      <p><strong>Runtime:</strong> ${film.runtime} minutes</p>
      <p><strong>Description:</strong> ${film.description}</p>
      <p><strong>Capacity:</strong> ${film.capacity}</p>
      <p><strong>Tickets Sold:</strong> ${film.tickets_sold}</p>
    `;

    filmContainer.appendChild(filmDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayFilms(films);
});
