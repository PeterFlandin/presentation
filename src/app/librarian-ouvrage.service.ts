import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';
import { Ouvrage } from './models/ouvrage';

@Injectable({
  providedIn: 'root',
})
export class LibrarianOuvrageService {
  private apiUrl = 'http://localhost:8080/librarian/books';

  constructor(private http: HttpClient) {}

  getLibrarianOuvrage(): Observable<Ouvrage[]> {
    return this.http.get<Ouvrage[]>(`${this.apiUrl}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getLibrarianOuvrageById(id: number): Observable<Ouvrage> {
    return this.http.get<Ouvrage>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, {}))
  )}

  getCreateLibrarianOuvrage(ouvrage: Ouvrage): Observable<Object> {
    return this.http.post(`${this.apiUrl}/add`, ouvrage).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, {}))
    );
    }

    getDeleteLibrarianOuvrage(id: number): Observable<Object>{
      return this.http.delete(`${this.apiUrl}/delete/${id}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, {}))
      )
    }

    getUpdateLibrarianOuvrage(id: number): Observable<Ouvrage>{
      return this.http.get<Ouvrage>(`${this.apiUrl}/${id}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, {}))
      )}



    

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
