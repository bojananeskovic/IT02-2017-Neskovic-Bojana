import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Smer } from '../models/smer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmerService {

  private readonly API_URL = 'http://localhost:8083/smer/';

  dataChange: BehaviorSubject<Smer[]> = new BehaviorSubject<Smer[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllSmer(): Observable<Smer[]> {
    this.httpClient.get<Smer[]>(this.API_URL).subscribe(data => {
      this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
  }

  public addSmer(smer: Smer): void{
    this.httpClient.post(this.API_URL, smer).subscribe();
    console.log('Dodat smer: ' + smer.naziv);
  }

  public updateSmer(smer: Smer): void {
    this.httpClient.put(this.API_URL, smer).subscribe();
  }

  public deleteSmer(id: number): void {
    console.log(this.API_URL + id);
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
