import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeWasSelected = new EventEmitter<Recipe>(); //edo pernao to Recipe type

  recipes: Recipe[];

  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); //perno ena copy apo to Recipe []
  }


  onRecipeSelected (recipe: Recipe) { //tha paro to recipe type
      this.recipeWasSelected.emit(recipe);
  }
}
