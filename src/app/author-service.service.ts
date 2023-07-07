import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorObj } from './models/authors';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  private apiUrl = 'http://localhost:8080/librarian/bookauthor';

  constructor(private http: HttpClient) { }


  createAuthor(authorObj: AuthorObj ): Observable<Object> {
    return this.http.post(`${this.apiUrl}/add`, authorObj).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, [])))
}

    getAuthorList(): Observable<AuthorObj[]> {
  return this.http.get<AuthorObj[]>(`${this.apiUrl}`).pipe(
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
