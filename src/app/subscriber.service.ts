import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of } from "rxjs"
import { Subscriber } from './models/subscriber';

@Injectable({
  providedIn: 'root'
})

export class SubscriberService {
  private apiUrl = 'http://localhost:8080/librarian';

  constructor(private http: HttpClient) {}

  getAllSubscriber(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(`${this.apiUrl}/consultSubscribers`).pipe(
			tap((response) => this.log(response)),
			catchError((error) => this.handleError(error, [])))
  }

createSubscriber(subscriber: Subscriber): Observable<Object> {
    return this.http.post(`${this.apiUrl}/addSubscriber`, subscriber).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, [])))
}

updateSubscribers(id: number, subscriber: Subscriber): Observable<Object> {
    return this.http.put(`${this.apiUrl}/updateSubscriber/${id}`, subscriber).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, [])))
}

deleteSubscriber(id: number): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/deleteSubscriber/${id}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, [])))
}

detailsSubscriber(id: number): Observable<Subscriber> {
    return this.http.get<Subscriber>(`${this.apiUrl}/readSubscriber/${id}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, [])))
    }


  private log(response: any) {
		console.table(response)
	}

  private handleError(error: Error, errorValue: any) {
		console.error(error)
		return of(errorValue)
	}




}