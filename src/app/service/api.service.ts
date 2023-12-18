import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://206.189.106.142:3001/eq/api/clienti';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Un errore lato client o di rete è avvenuto. Gestiscilo di conseguenza.
      console.error('Si è verificato un errore:', error.error.message);
    } else {
      // Il backend ha restituito un codice di risposta non riuscito.
      console.error(
        `Il backend ha restituito il codice ${error.status}, ` +
        `corpo era: ${error.error}`);
    }
    // Ritorna un observable con un messaggio di errore adatto all'utente.
    return throwError(
      'Qualcosa è andato storto; per favore riprova più tardi.');
  }
}
