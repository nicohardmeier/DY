import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/server/dishes.txt');
  }

  getDetails(name) {
    return this.http.get('assets/server/content/' + name + '.txt', { responseType: 'text' });
  }
}




