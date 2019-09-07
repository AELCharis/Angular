import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged   //pao sta ingredient na do ean exi allaksi
      .subscribe(                           //kano subscribe gia na ksero ean exi gini kapia allgi
        (ingredients: Ingredient[]) => {  //etsi tha ksero oti exoun gini allages
          this.ingredients = ingredients;   //pernao ta ingredient pou pira me ta kanonika ingredinet
        }
      ) ;
  }

}
