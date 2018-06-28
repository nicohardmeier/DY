import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private dish = new BehaviorSubject<any>([]);
  currentDish = this.dish.asObservable();

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/server/dishes.txt');
  }

  getDetails(name) {
    return this.http.get('assets/server/content/' + name + '.txt', { responseType: 'text' });
  }
}




