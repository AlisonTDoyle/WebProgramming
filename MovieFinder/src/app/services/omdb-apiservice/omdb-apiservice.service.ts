import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IMDBResponse } from '../../interfaces/IMDBResponse';
import { IODBResponse2 } from '../../interfaces/omdbmresponse2';

@Injectable({
  providedIn: 'root'
})

export class OmdbAPIServiceService {

  private _siteUrl = "https://www.omdbapi.com/";
  private _key = "?apikey=24b844f0&t=";
  private _key2 = "?apikey=24b844f0&s=";

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

  getMoviesData(movieName:string, page:number):Observable<IODBResponse2> {
    return this._http.get<IODBResponse2>(this._siteUrl+ this._key2 + movieName + "&page=" + page)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
}
