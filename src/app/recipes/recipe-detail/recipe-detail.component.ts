import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeListService } from '../recipe-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private RecipeList: RecipeListService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.RecipeList.getRecipe(this.id);
      }
    );
  }
  addshoppingList() {
    this.RecipeList.getaddshoppingList(this.recipe.ingredients);
  }
}
