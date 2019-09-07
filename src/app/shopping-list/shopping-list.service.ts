import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {

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

  }
}
