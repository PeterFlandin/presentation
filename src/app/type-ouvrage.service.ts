import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';
import { TypeBook } from './models/typeOfBook';

@Injectable({
  providedIn: 'root',
})
export class TypeOuvrageService {
  private apiUrl = 'http://localhost:8080/librarian/typeofbook';

  constructor(private http: HttpClient) {}

  getOuvrageList(): Observable<TypeBook[]> {
    return this.http.get<TypeBook[]>(this.apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

 createTypeofbook(typeofbook: TypeBook ): Observable<Object> {
    return this.http.post(`${this.apiUrl}/add`, typeofbook).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, [])))
}
  
updateTypeofbook(id: number, typeofbook: TypeBook ): Observable<Object> {
  return this.http.put(`${this.apiUrl}/${id}`, typeofbook).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, [])))
}

detailsTypeofbook(id: number): Observable<TypeBook> {
  return this.http.get<TypeBook>(`${this.apiUrl}/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, [])))
  }


  deleteTypeofbook(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, [])))
  }


  /*  addOuvrageType() {
    if (this.newType.trim() !== '') {
      this.http.createType({ name: this.newType }).subscribe((createdType) => {
        this.typesOuvrage.push(createdType);
        this.newType = ''; // Réinitialiser la valeur de l'input
      });
    }
  } */

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
