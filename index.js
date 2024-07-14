document.addEventListener ('DOMContentLoaded',()=> {
    const filmList =document.getElementById('films');
    const movieDetails = document.getElementById('movies-details');
    
    // Fetch the details on the movie list
    fetchMovies();

    function fetchMovies(){
        fetch('https://docs.google.com/document/d/1KKqnHX4woJXQD1DSARTOcFD66uniLy0qwJFoHmmQDbA/edit?usp=sharing')
        .then(Response => Response.json())
        .then (movies => 
        displayMovieList(movies);

        // The first movie's details
        if (movies.length > 0) {
        displayMovieDetails(movies[0]) ;
        } 
    }
});

function displayMovieList(movies){
    filmList.innerHTML = ''; 
    // clear existing list 
   movies.forEach(movie =>{
    const movieItem = document.createElement(li);
    movieItem.className ='fil item ';
    movieItem.textName = movie.title;
    movieItem.addEventListener('click',() => displayMovieDetails(movie));
    filmList.appendChild(movieItem);
   });
}


function displayMovieDetails(movie){
    const availableTicketsb=movie.capacity -movie.tickets_sold;
    movieDetails.innerHTML =`
    < div class = "movie-details">
        <h2>${movie.title}</h2>
        <img src = "${movie.poster}" alt = "${movie.title}">
        <p>${movie.description}</p>
        <p>Runtime: ${movie.runtime} minutes</p>
        <p>Showtime: ${movie.showtime}</p>
        <p>Available Tickets: <span id =" available-tickets"></span></p>
        <button id = "buy-ticket-button">Buy Ticket</button>
    </div>
    `;
    const buyTicketButton = document.getElementById('buy-ticket-button');
    buyTicketButton.addEventListener('click',() => buyTicketButton(movie) );
}


function buyTicket(movie){
    const availableTicketsElement = document.getElementById('available-tickets');
    let availableTickets = parseInt(availableTicketsElement.textContent,10);
    if (availableTickets > 0){
        availableTickets -= 1;
        availableTicketsElement.textContent = availableTickets;
    } else {
        alert ('No tickets available');
    }
}

