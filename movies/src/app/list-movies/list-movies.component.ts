import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  movies:any[] = [];
  private currentMovie!:Movie;

  @Output() onSelectedMovie:EventEmitter<Movie>;

  constructor(private movieService:MoviesService) {
    this.onSelectedMovie = new EventEmitter();
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  selectMovie(myMovie:Movie):void {
    console.log(myMovie);

    this.currentMovie = myMovie;
    this.onSelectedMovie.emit(myMovie);
  }

  isSelected(movie:Movie):boolean {
    if (!movie || !this.currentMovie) {
      return false;
    }
    return movie.title == this.currentMovie.title;
  }
}
