import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor() { }

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Barnie'];
  public deletedHero?: string;

  removeLastHero():void{
    //remueve el ultimo elemento
    this.deletedHero = this.heroNames.pop();
  }


}
