// Movie festival

"use strict";

(function () {
  console.log("Hi");

  /* constructor function for Genre */
  function Genre(name) {
    this.genreName = name;
    this.getData = function () {
      return (
        this.genreName[0].toUpperCase() +
        this.genreName[this.genreName.length - 1].toUpperCase()
      );
    };
  }

  /* constructor function for Movie */
  function Movie(title, length, genre) {
    this.movieTitle = title;
    this.movieGenre = genre;
    this.movieLength = length;
    this.getData = function () {
      return (
        this.movieTitle + ", " + this.movieLength + " min, " + this.movieGenre
      );
    };
  }

  /* constructor function for Program */
  function Program(date, numberMovies) {
    this.programDate = date;
    this.movieList = [];
    this.programMovieNUmbers = numberMovies;
    this.addMovie = function (movie) {
      this.movieList.push(movie);
    };
    this.getData = function () {
      var string = "";
      var sum = 0;
      for (var i = 0; i < this.movieList.length; i++) {
        sum += this.movieList[i].movieLength;
      }
      string += this.programDate + ", program duration " + sum + " min\r";
      for (var i = 0; i < this.movieList.length; i++) {
        string += "\t\t\t\t\t" + this.movieList[i].getData() + "\r";
      }
      return string;
    };
  }

  /* constructor function for Festival */
  function Festival(name, numMovies) {
    this.festivalName = name;
    this.numMovies = numMovies;
    this.lisOfPrograms = [];
    this.addProgram = function (program) {
      this.lisOfPrograms.push(program);
    };
    this.getData = function () {
      var string = "";
      var sum = 0;
      for (var i = 0; i < this.lisOfPrograms.length; i++) {
        sum += this.lisOfPrograms[i].movieList.length;
      }
      string += "Weekend festival has " + sum + " movie titles\r";
      for (var i = 0; i < this.lisOfPrograms.length; i++) {
        string += "\t" + this.lisOfPrograms[i].getData() + "\r";
      }
      return string;
    };
  }

  /* function for create Movie and Genre Objects */
  function createMovie(title, length, genre) {
    var genre = new Genre(genre);
    var movie = new Movie(title, length, genre.getData());
    return movie;
  }

  /* function for create Program */
  function createProgram(date) {
    var program = new Program(date);
    return program;
  }

  /* creating Festival object */
  var festival = new Festival("Fest", 24);

  /* creating  programs */
  var program1 = createProgram("17.10.2023");
  var program2 = createProgram("18.10.2023");

  /* creating movies */
  var movie1 = createMovie("Spider-Man", 133, "action");
  var movie2 = createMovie("Planet of the Apes", 140, "drama");
  var movie3 = createMovie("The Dark Tower", 95, "action");
  var movie4 = createMovie("Deadpool", 108, "comedy");

  /* adding movies to programs */
  program1.addMovie(movie1);
  program1.addMovie(movie2);
  program1.addMovie(movie3);
  program2.addMovie(movie4);

  /* adding programs to festival */
  festival.addProgram(program1);
  festival.addProgram(program2);

  /* display informations */
  console.log(festival.getData());
})();
