import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeListService } from '../../recipe-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;

constructor(private RecipeList: RecipeListService) { }

  ngOnInit() {
  }
  onSelected() {
    this.RecipeList.recipeSelectedemo.emit(this.recipe);
  }
}
