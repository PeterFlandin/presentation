import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';
import { Ouvrage } from './models/ouvrage';

@Injectable({
  providedIn: 'root',
})
export class LibrarianOuvrageService {
  private apiUrl = 'http://localhost:8080/librarian';

  constructor(private http: HttpClient) {}

  getLibrarianOuvrageList(): Observable<Ouvrage[]> {
    return this.http.get<Ouvrage[]>(`${this.apiUrl}/books`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getLibrarianOuvrageById(id: number): Observable<Ouvrage> {
    return this.http.get<Ouvrage>(`${this.apiUrl}/books/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, {}))
    );
  }

  detailsOuvrage(id: number): Observable<Ouvrage> {
    return this.http.get<Ouvrage>(`${this.apiUrl}/books/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getCreateLibrarianOuvrage(ouvrage: Ouvrage): Observable<Object> {
    return this.http.post(`${this.apiUrl}/add`, ouvrage).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, {}))
    );
  }

  deleteOuvrage(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/books/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  updateOuvrage(id: number, ouvrage: Ouvrage): Observable<Object> {
    return this.http.put(`${this.apiUrl}/books/${id}`, ouvrage).pipe(
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
