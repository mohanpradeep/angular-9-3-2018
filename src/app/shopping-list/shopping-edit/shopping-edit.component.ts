import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredinent } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amoutInput') amoutInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredinent>();

  constructor(private ShoppingList: ShoppingListService) {}

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amoutInputRef.nativeElement.value;
    const newIngredient = new Ingredinent(ingName, ingAmout);
    this.ShoppingList.getShoppingListServiceAdd(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }
  onClear(event) {
    this.nameInputRef.nativeElement.value = '';
    this.amoutInputRef.nativeElement.value = '';
  }
}
