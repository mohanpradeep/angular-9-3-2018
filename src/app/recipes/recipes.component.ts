import { Component, OnInit} from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListService } from './recipe-list.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private RecipeList: RecipeListService) { }

  ngOnInit() {
    this.RecipeList.recipeSelectedemo
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
