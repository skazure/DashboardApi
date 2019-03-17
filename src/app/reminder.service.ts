import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IReminder } from './reminders';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private remindersUrl =  "http://webapi.localhost.net/api/Reminders";   //"http://localhost:59730/api/Reminders";  // "api/reminders/reminders.json"
  private reminderUpdateUrl = "http://webapi.localhost.net/api/Reminders";


  constructor(private http: HttpClient) { }

  getReminders(): Observable<IReminder[]> {

    return this.http.get<IReminder[]>(this.remindersUrl).pipe(
    tap (data => console.log('All reminders: ' + JSON.stringify(data))),
    catchError(this.handleError)); 
  }

  

createReminder(reminder: IReminder): Observable<IReminder> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.post<IReminder>(this.reminderUpdateUrl + '/', reminder, httpOptions);
}

  private handleError(err: HttpErrorResponse){

    let errorMessage = '';
    if (err.error instanceof ErrorEvent){

      errorMessage = `An error occured: ${err.error.message}`;
      
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  } 

}
