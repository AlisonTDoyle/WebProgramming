import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie List';

  movies:any[] = [];

  constructor(private movieService:MoviesService) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }
}
