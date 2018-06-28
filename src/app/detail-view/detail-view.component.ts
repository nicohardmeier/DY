import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  dish: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let name = params.get('name').toLowerCase().replace(/\(.*?\)/g, "").replace(/[, ]+/g, "");
      this.dataService.getDetails(name)
        // Los ficheros txt con los platos no contienen un json valido 
        // ya que tienen un ";" al final 
        // Por eso le aplico a la respuesta un string replace para quitarle ";"
        // y luego parsearlo a json
        .subscribe(dish => this.dish = JSON.parse(dish.replace(/;*$/g, "")));
    });
  }

}

