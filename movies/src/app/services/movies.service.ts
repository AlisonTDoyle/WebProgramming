import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor() { }

  movieList = [
    new Movie("The GodFather",'1972','Francis Ford Coppola'),
    new Movie("Millers Corssing",'1990','The Coen Brothers'),
    new Movie("Dial M for Murder",'1972','Alfred Hitchcock'),
    new Movie("Whiplash",'2014','Damien Chanzelle'),
  ];

  // Might need to change this to new Movie()
  addMovie(movieTitle:string, movieDirector:string, movieYear:string) {
    this.movieList.push({title:movieTitle, director:movieDirector, year:movieYear});
  }

  getMovies() {
    return this.movieList;
  }
}
