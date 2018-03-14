import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter <Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Blueberries Raspberries', 'This is simply a test', 'https://images.pexels.com/photos/87818/background-berries-berry-blackberries-87818.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Food Dinner Pasta Spaghetti', 'This is simply a test', 'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Brown Potato', 'brown potato in front of french fries', 'https://images.pexels.com/photos/162971/potatoes-french-mourning-funny-162971.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeselected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
