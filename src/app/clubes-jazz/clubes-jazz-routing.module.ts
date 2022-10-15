import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubesJazzPage } from './clubes-jazz.page';

const routes: Routes = [
  {
    path: '',
    component: ClubesJazzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubesJazzPageRoutingModule {}
