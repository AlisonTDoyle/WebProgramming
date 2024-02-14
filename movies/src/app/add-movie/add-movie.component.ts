import { Component } from '@angular/core';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [

  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})

export class AddMovieComponent {
  constructor (private movieService:MoviesService) {}

  addNewMovie(movieTitle:HTMLInputElement, movieDirector:HTMLInputElement, movieYear:HTMLInputElement):boolean {
    this.movieService.addMovie(movieTitle.value, movieDirector.value, movieYear.value);
    return false;
  }
}
