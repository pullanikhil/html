
const apiKey = 'https://www.omdbapi.com/?i=tt3896198&apikey=86251aa1'; 

function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hardcoded credentials (replace with a more secure authentication method)
    if (username === "your_username" && password === "your_password") {
        window.location.href = "movies.html"; // Redirect to movies page
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function fetchMovieDetails() {
    // Example movie title
    const movieTitle = 'Inception';

    // Make a request to OMDB API
    fetch(`http://www.omdbapi.com/?t=${movieTitle}'&apikey'=${https://www.omdbapi.com/?i=tt3896198&apikey=86251aa1}`)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
        });
}

function displayMovieDetails(movie) {
    // Update the movies.html page with dynamic movie details
    const moviesContainer = document.querySelector('.movies-container');
    moviesContainer.innerHTML = `
        <h1>${movie.Title}</h1>
        <p>Ratings: ${movie.imdbRating}</p>
        <p>Released Year: ${movie.Year}</p>
    `;
}

// Call fetchMovieDetails when the movies.html page loads
if (window.location.href.includes('movies.html')) {
    fetchMovieDetails();
}
