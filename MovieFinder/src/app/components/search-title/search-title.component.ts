import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IMDBResponse } from '../../interfaces/IMDBResponse';
import { OmdbAPIServiceService } from '../../services/omdb-apiservice/omdb-apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-title',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './search-title.component.html',
  styleUrl: './search-title.component.css'
})
export class SearchTitleComponent {
  title = 'MovieFinder';
  movieData:IMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbAPIServiceService) {

  }

  getMovieDetails(movieName:string) :boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log("Director Name: " + this.movieData.Director);
      }
    )
    return false;
  }
}
