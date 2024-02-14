import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  movieList = [
    { title: "The GodFather", year: '1972', director: 'Francis Ford Coppola' },
    { title: "Millers Corssing", year: '1990', director: 'The Coen Brothers' },
    { title: "Dial M for Murder", year: '1972', director: 'Alfred Hitchcock' },
    { title: "Whiplash", year: '2014', director: 'Damien Chanzelle' },
  ];

  addMovie(movieTitle:string, movieDirector:string, movieYear:string) {
    this.movieList.push({title:movieTitle, director:movieDirector, year:movieYear});
  }

  getMovies() {
    return this.movieList;
  }
}
