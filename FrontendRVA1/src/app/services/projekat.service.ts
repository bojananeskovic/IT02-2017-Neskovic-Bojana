import { Projekat } from './../models/projekat';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjekatService {

  private readonly API_URL = 'http://localhost:8083/projekat/';

  dataChange: BehaviorSubject<Projekat[]> = new BehaviorSubject<Projekat[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllProjekat(): Observable<Projekat[]> {
    this.httpClient.get<Projekat[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addProjekat(projekat: Projekat): void{
    projekat.id = 0;
    this.httpClient.post(this.API_URL, projekat).subscribe();
    console.log('Dodat projekat: ' + projekat.naziv);
  }

  public updateProjekat(projekat: Projekat): void {
    this.httpClient.put(this.API_URL, projekat).subscribe();
  }

  public deleteProjekat(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
