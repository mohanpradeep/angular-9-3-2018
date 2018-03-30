import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredinent } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeListService {

  recipeSelectedemo = new EventEmitter<Recipe>() ;

  private recipes: Recipe[] = [
    new Recipe(
      'Blueberries Raspberries',
      'This is simply a test',
      'https://images.pexels.com/photos/87818/background-berries-berry-blackberries-87818.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      [ new Ingredinent('Blueberries', 20),
        new Ingredinent('Raspberries', 5)
      ]),
    new Recipe(
      'Food Dinner Pasta Spaghetti',
      'This is simply a test',
      'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
      [ new Ingredinent('Food Dinner', 74),
        new Ingredinent('Pasta Spaghetti', 154)
    ]),
    new Recipe(
      'Brown Potato',
      'brown potato in front of french fries',
      'https://images.pexels.com/photos/162971/potatoes-french-mourning-funny-162971.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      [ new Ingredinent('Brown', 85),
        new Ingredinent('Potato', 90)
    ]),
  ];
  constructor(private ShoppingList: ShoppingListService) {}

  getrecipeslist() {
    return this.recipes.slice();
  }

  getaddshoppingList(ingredients: Ingredinent[]) {
    this.ShoppingList.getaddshopping(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}
