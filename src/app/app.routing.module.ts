import {NgModule} from '@angular/core';
// @ts-ignore
import { Routes, RouterModule  } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipes/recipes-start/recipe-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}, //kane redirect mono ean to full path ine empty
  { path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent },  //default /recipes / nothing
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]},
  { path: 'shopping-list', component: ShoppingListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
