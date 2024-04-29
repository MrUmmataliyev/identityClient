import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {
  txt = "Welcome"

 items = ['Say', 'Hi', 'Hola', 'Bello'];

 addItem(newItem: string) {
   this.items.push(newItem);
 }

}


