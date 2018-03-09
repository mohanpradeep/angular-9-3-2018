import { Component, OnInit } from '@angular/core';
import { Ingredinent } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredinent[] = [
    new Ingredinent('Apples', 50),
    new Ingredinent('Tomatoes', 5)
  ];
  constructor() { }

  ngOnInit() {
  }

}
