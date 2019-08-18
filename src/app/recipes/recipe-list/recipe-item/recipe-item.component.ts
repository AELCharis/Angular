import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 @Output() recipeSelected = new EventEmitter<void>(); //gia na mporo na akouo apo ekso vazo to Output
 @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }


  onSelected() {
  this.recipeSelected.emit(); //otan gini click tha treksi afti i function k pano pass to emit
}
}
