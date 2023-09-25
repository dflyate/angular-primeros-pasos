import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [];

  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }

}