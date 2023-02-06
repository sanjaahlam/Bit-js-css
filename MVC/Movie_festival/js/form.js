"use strict";

var movies = [];
var moviesForDropDown = [];
var programsForDropDown = [];

function createMovie() {
  var name = document.getElementById("movieName").value;
  var duration = document.getElementById("movieDuration").value;
  var genre = document.getElementById("movieGenre").value;

  if (!name || !duration || !genre) {
    alert("Please fill out all fields.");
    return;
  }

  var movie = new Movie(name, duration, genre);
  var movieEl = document.createElement("div");
  movieEl.innerHTML = movie.getData();
  movies.push(movie.getMovie());
  document.getElementById("output").appendChild(movieEl);
  document.getElementById("movieForm").reset();

  var moviesSelect = document.getElementById("selectMovie");
  var myOption = document.createElement("option");
  myOption.text = movie.getData();
  myOption.value = movie.getData();
  moviesSelect.add(myOption);
}
const createButton = document.getElementsByClassName("create-button");
createButton.addEventListener("click", createMovie);
function getFullDuration(movies) {
  if (!movies.length) return 0;
  var count = 0;
  movies.forEach((movie) => {
    count += movie.duration;
  });
  return count;
}
function createProgram() {
  var date = document.getElementById("date").value;

  if (!date) {
    alert("Please fill out date.");
    return;
  }

  var program = new Program(date, movies.length, getFullDuration(movies));
  var programEl = document.createElement("div");
  programEl.innerHTML = program.getData();

  document.getElementById("programOutput").appendChild(programEl);
  document.getElementById("programForm").reset();
  var programsSelect = document.getElementById("selectProgram");
  var myOption = document.createElement("option");
  myOption.text = program.getData();
  myOption.value = program.getData();
  programsSelect.add(myOption);
}
const createProgramButton = document.getElementsByClassName(
  "create-program-button"
);
createProgramButton.addEventListener("click", createProgram);

function createMovieProgram() {
  var movie = document.getElementById("selectMovie").value;
  var program = document.getElementById("selectProgram").value;

  if (!movie.length || !program.length) {
    alert("Please fill out all fields.");
    return;
  }

  var movieProgram = new MovieProgram(movie, program);

  var movieProgramEl = document.createElement("div");
  movieProgramEl.innerHTML = movieProgram.getData();

  document.getElementById("movieProgramOutput").appendChild(movieProgramEl);
  document.getElementById("movieProgramForm").reset();
}
const createMovieProgramButton = document.getElementsByClassName(
  "create-movie-program-button"
);
createProgramButton.addEventListener("click", createMovieProgram);
