import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() inputValue: string = '';
  constructor(){ }
  ngOnInit(): void {
  }
  @Output() inputValueChange = new EventEmitter<string>();
  say='Hello Teacher';
  PostData(){
    this.inputValueChange.emit(this.say);
  }
}
