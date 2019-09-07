import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();  //kano emmiter gia na paro to neo ingredient apo to copy k na to peraso sto kanoniko

 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); //perno ta ingredients me ena COPY methodos slice,
                                    // me afto ton tropo den exoun access sta original ingridents
  }

  addIngredients(ingredient: Ingredient) { //tha exo recived pari ta ilika ingredintes
    this.ingredients.push(ingredient);  //thelo na exo access se afta k na kano push add ta ingredients
    this.ingredientsChanged.emit(this.ingredients.slice());  //perno ta copy sto kanoniko ingredinet

  }
}
