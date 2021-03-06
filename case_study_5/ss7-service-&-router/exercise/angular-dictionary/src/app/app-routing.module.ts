import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListWordComponent} from "./dictionary/list-word/list-word.component";
import {DictionaryDetailComponent} from "./dictionary/dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  {path: 'dictionary/list', component: ListWordComponent},
  {path: 'dictionary/detail/:txt', component: DictionaryDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
