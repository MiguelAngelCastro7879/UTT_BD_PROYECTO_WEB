import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor(private http : HttpClient) { }
  endpoint = "http://127.0.0.1:3334"
  public getDataWithEvWeek(){
    return this.http.get<any>(`${this.endpoint}/getDataWithEvWeek`)
  }
  public getDataWithTech(){
    return this.http.get<any>(`${this.endpoint}/getDataWithTech`)
  }
  public getDataWithEvsirebreed(){
    return this.http.get<any>(`${this.endpoint}/getDataWithEvsirebreed`)
  }
  public getDataWithBrd(){
    return this.http.get<any>(`${this.endpoint}/getDataWithBrd`)
  }
  public getDataWithAgeda(){
    return this.http.get<any>(`${this.endpoint}/getDataWithAgeda`)
  }
  public getDataWithBredREas(){
    return this.http.get<any>(`${this.endpoint}/getDataWithBredREas`)
  }
  public getDataWithDate(){
    return this.http.get<any>(`${this.endpoint}/getDataWithDate`)
  }
  public getDataWithPen(){
    return this.http.get<any>(`${this.endpoint}/getDataWithPen`)
  }
  public getDataWithConcepRate(){
    return this.http.get<any>(`${this.endpoint}/getDataWithConcepRate`)
  }
  public getDataWithBarnNm(){
    return this.http.get<any>(`${this.endpoint}/getDataWithBarnNm`)
  }
}
