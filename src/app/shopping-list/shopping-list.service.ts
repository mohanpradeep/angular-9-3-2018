import { Injectable, EventEmitter } from '@angular/core';
import { Ingredinent } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ShoppingListServiceAdd = new EventEmitter<Ingredinent[]> ();

  constructor() { }

  private ingredients: Ingredinent[] = [
    new Ingredinent('Apples', 50),
    new Ingredinent('Tomatoes', 5)
  ];

  getshopping() {
    return this.ingredients.slice();
  }
  getShoppingListServiceAdd(ingredinent: Ingredinent) {
    this.ingredients.push(ingredinent);
    this.ShoppingListServiceAdd.emit(this.ingredients.slice());
  }

  getaddshopping(ingredients: Ingredinent[]) {
    this.ingredients.push(...ingredients);
    this.ShoppingListServiceAdd.emit(this.ingredients.slice());
  }
}
