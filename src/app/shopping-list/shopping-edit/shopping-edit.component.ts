import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @Output() demo = new EventEmitter<{Servename: string, Serveamout: number }>();
  constructor() { }
  name = '';
  amount: any;

  ngOnInit() {
  }
  add() {
    this.demo.emit({
      Servename: this.name,
      Serveamout: this.amount
    });
    this.name = '';
    this.amount = '';
  }
}
