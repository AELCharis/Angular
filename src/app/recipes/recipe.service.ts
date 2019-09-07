import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Schnitzel',
      'Tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat',1),
        new Ingredient('Fries',20)
      ]),
    new Recipe(
      'Big Burger',
      'The Best Burger',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Bread',2),
        new Ingredient('Meat',1)
      ])
  ];


      getRecipes() {
        return this.recipes.slice();
      }
}
