import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profil } from './models/profil';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = 'http://localhost:8080/subscriber';

  constructor(private http: HttpClient) { }
  // getAllSubscriber(): Observable<Subscriber[]> {
  //   return this.http.get<Subscriber[]>(`${this.apiUrl}/consultSubscribers`).pipe(
	// 		tap((response) => this.log(response)),
	// 		catchError((error) => this.handleError(error, [])))
  // }

  getProfilSubscriber(id: number): Observable<Profil> {
    return this.http.get<Profil>(`${this.apiUrl}/${id}`)
  }
  updateProfil(id: number, profil: Profil): Observable<Object> {
    return this.http.put(`${this.apiUrl}/put/${id}`, profil)
}

}
