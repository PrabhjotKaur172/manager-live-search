import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ManagerService {
  constructor(private httpClient: HttpClient) {}

  getManagersData(): Observable<any> {
    return this.httpClient.get(
      "https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json"
    );
  }
}
