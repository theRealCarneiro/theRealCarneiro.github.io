import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotfilesComponent } from './dotfiles/dotfiles.component'
import { MinlauComponent } from './minlau/minlau.component'

const routes: Routes = [
	{path: 'dotfiles', component: DotfilesComponent},
	{path: 'minlau', component: MinlauComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
