import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITask } from './tasks';
import { throwError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl =   "http://webapi.localhost.net/api/UserTasks"; // "http://lohcalhost:59730/api/UserTasks";   // "api/tasks/tasks.json";

  constructor(private http: HttpClient) { }


  getTasks(): Observable<ITask[]> {

    return this.http.get<ITask[]>(this.tasksUrl).pipe(
    tap (data => console.log('All tasks:  ' + JSON.stringify(data))),
    catchError(this.handleError)); 
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
