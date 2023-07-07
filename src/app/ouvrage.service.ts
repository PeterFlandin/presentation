import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';
import { Ouvrage } from './models/ouvrage';

@Injectable({
  providedIn: 'root',
})
export class OuvrageService {
  private apiUrl = 'http://localhost:8080/subscriber/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Ouvrage[]> {
    return this.http.get<Ouvrage[]>(this.apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
