import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DesignationInDto, DesignationOutDto} from "./designation.model";


@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  private baseUrl = "http://localhost:8080/api"
  private designationUrl = "/designations"

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<DesignationOutDto[]> {
    return this.http.get<DesignationOutDto[]>(`${this.getUrl()}`);
  }

  public findById(id: number): Observable<DesignationOutDto> {
    return this.http.get<DesignationOutDto>(`${this.getUrl()}/${id}`);
  }

  public create(designation: DesignationInDto): Observable<DesignationOutDto> {
    return this.http.post(`${this.getUrl()}`, designation);
  }

  public update(id: number, designation: DesignationInDto): Observable<DesignationOutDto> {
    return this.http.put<DesignationInDto>(`${this.getUrl()}/${id}`, designation);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.getUrl()}/${id}`);
  }

  private getUrl() {
    return `${this.baseUrl}${this.designationUrl}`
  }
}
