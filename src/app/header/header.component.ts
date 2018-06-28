import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  more: boolean = false;
  dishes: any;
  title: string = "Section 2";

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getMore() {
    this.more = true;
    this.dataService.getData().subscribe(res => {
      this.dishes = res;
    })
  }

}
