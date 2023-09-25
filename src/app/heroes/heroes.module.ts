import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent
  ],
  /* importante importar para que no fallen los if */
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
