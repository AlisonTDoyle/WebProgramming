import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../services/movies.service';

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

  constructor(private movieService:MoviesService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
