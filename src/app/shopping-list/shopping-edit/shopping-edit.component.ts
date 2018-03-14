import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredinent } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amoutInput') amoutInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredinent>();
  constructor() {}

  ngOnInit() {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amoutInputRef.nativeElement.value;
    const newIngredient = new Ingredinent(ingName, ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }

}
