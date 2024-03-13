import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IMDBResponse } from '../../interfaces/IMDBResponse';

@Injectable({
  providedIn: 'root'
})

export class OmdbAPIServiceService {

  private _siteUrl = "https://www.omdbapi.com/";
  private _key = "?apikey=24b844f0&t=";

  constructor(private _http:HttpClient) {
  }

  getMovieData(movieName:string):Observable<IMDBResponse> {
    return this._http.get<IMDBResponse>(this._siteUrl + this._key + movieName)
    .pipe(
      tap(data => console.log("Moviedata/error" + JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse) {
    console.log("OmdbApiService:" + error.message);
    return throwError(() => new Error("OmdbApiService:" + error.message))    
  }
}
