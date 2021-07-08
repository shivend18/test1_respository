import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class McoServicesService {

  constructor(private http: HttpClient) {
  }

  public getEmployeeData(): Observable<any> {
    const url = 'assets/employeeDetails.json';
    return this.http.get(url);
  }
}
