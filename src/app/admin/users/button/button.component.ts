import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() myText: string = '';
  
  @Output() newItemEvent = new EventEmitter<string>();

  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
