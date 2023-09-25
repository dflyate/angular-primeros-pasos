import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

//el root evita que tenga que definir el servicio en el app.modules en la seccion providers
//con el root nuestro servicio va a ser un singleton en toda la aplicacion, siempre que sea mediante injeccion de dependencias
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
  ];

  addCharacter(character: Character):void{
    //operador spread esparcir el resto de propiedades
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
