import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ExperienceInDto, ExperienceOutDto} from "./experience.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {


  private baseUrl = "http://localhost:8080/api"
  private experienceUrl = "/experiences"

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<ExperienceOutDto[]> {
    return this.http.get<ExperienceOutDto[]>(`${this.getUrl()}`);
  }

  public findById(id: number): Observable<ExperienceOutDto> {
    return this.http.get<ExperienceOutDto>(`${this.getUrl()}/${id}`);
  }

  public create(experienceInDto: ExperienceInDto): Observable<ExperienceOutDto> {
    return this.http.post(`${this.getUrl()}`, experienceInDto);
  }

  public update(id: number, experienceInDto: ExperienceInDto): Observable<ExperienceOutDto> {
    return this.http.put<ExperienceInDto>(`${this.getUrl()}/${id}`, experienceInDto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.getUrl()}/${id}`);
  }

  private getUrl() {
    return `${this.baseUrl}${this.experienceUrl}`
  }
}
