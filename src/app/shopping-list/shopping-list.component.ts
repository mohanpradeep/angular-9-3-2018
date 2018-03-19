import { Component, OnInit } from '@angular/core';
import { Ingredinent } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredinent[];
  constructor(private ShoppingList: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingList.getshopping();
    this.ShoppingList.ShoppingListServiceAdd
    .subscribe(
      (ingredient: Ingredinent[]) => {
        this.ingredients = ingredient;
      }
    );
  }
  onIngrdientAdded(ingredient: Ingredinent) {
    this.ingredients.push(ingredient);
  }
}
