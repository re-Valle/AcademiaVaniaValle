import { Alunos } from './alunos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  baseUrl = "http://localhost:3001/alunos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(alunos: Alunos): Observable<Alunos> {
    return this.http.post<Alunos>(this.baseUrl, alunos).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Alunos[]> {
    return this.http.get<Alunos[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string | null): Observable<Alunos> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Alunos>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(alunos: Alunos): Observable<Alunos> {
    const url = `${this.baseUrl}/${alunos.id}`
    return this.http.put<Alunos>(url, alunos).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(alunos: Alunos): Observable<Alunos> {
    const url = `${this.baseUrl}/${alunos.id}`;
    return this.http.delete<Alunos>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY
  }
}
