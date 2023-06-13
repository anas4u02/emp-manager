import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CandidateInDto, CandidateOutDto} from "./candidate.model";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseUrl = "http://localhost:8080/api";
  private candidateUrl = "/candidates";

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<CandidateOutDto[]> {
    return this.http.get<CandidateOutDto[]>(`${this.getUrl()}`);
  }

  public findById(id: number): Observable<CandidateOutDto> {
    return this.http.get<CandidateOutDto>(`${this.getUrl()}/${id}`);
  }

  public create(candidate: CandidateInDto): Observable<CandidateOutDto> {
    return this.http.post(`${this.getUrl()}`, candidate);
  }

  public update(id: number, candidate: CandidateInDto): Observable<CandidateOutDto> {
    return this.http.put<CandidateInDto>(`${this.getUrl()}/${id}`, candidate);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.getUrl()}/${id}`);
  }

  private getUrl() {
    return `${this.baseUrl}${this.candidateUrl}`
  }
}
