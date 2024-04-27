import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {
  said: string = '';


  GetData(listen:string){
    this.said =listen;
  }

}


