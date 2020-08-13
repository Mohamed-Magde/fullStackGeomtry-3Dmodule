import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cube } from './cube';
@Injectable({
  providedIn: 'root',
})
export class CubeService {
  private apiURL = 'http://127.0.0.1:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Cube[]> {
    return this.httpClient
      .get<Cube[]>(this.apiURL + '/geometry/')
      .pipe(catchError(this.errorHandler));
  }

  create(Cube): Observable<Cube> {
    return this.httpClient
      .post<Cube>(
        this.apiURL + '/geometry/',
        JSON.stringify(Cube),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  find(id): Observable<Cube> {
    return this.httpClient
      .get<Cube>(this.apiURL + '/geometry/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id, Cube): Observable<Cube> {
    return this.httpClient
      .put<Cube>(
        this.apiURL + '/geometry/' + id + '/',
        JSON.stringify(Cube),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete<Cube>(this.apiURL + '/geometry/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
