import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params
      .subscribe(
        (params: Params) => {  //perno to update version tou Params
          this.user.id = params['id'];    //tha kani update to id opote i parametros alazi
          this.user.name = params['name']; //tha kani update to name opote i parametros alazi
        }
      );
  }

}
