import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  movieList = [
    { id: 1, title: "The GodFather", year: '1972', director: 'Francis Ford Coppola' },
    { id: 2, title: "Millers Corssing", year: '1990', director: 'The Coen Brothers' },
    { id: 3, title: "Dial M for Murder", year: '1972', director: 'Alfred Hitchcock' },
    { id: 4, title: "Whiplash", year: '2014', director: 'Damien Chanzelle' },
  ];

  getMovies() {
    return this.movieList;
  }
}
