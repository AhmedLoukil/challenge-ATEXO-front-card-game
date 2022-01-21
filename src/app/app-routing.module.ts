import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerHandComponent } from './player-hand/player-hand.component';

const routes: Routes = [
      { path: '', component: PlayerHandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
