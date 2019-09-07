import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;  //import to ViewChild k pernao to nameInput pou perno apo to html
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    //add new emit gia na peraso sto parent component to opion ine to shoping-list.component
   const newIngredient  = new Ingredient(ingName, ingAmount);  //dimiourgo neo Ingredient k pernao to onoma

    this.slService.addIngredients(newIngredient);

  }

}
