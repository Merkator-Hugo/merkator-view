import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerkatorDemoComponent } from 'merkator-demo';

const routes: Routes = [
  { path: '', component: MerkatorDemoComponent },
  { path: 'percelen', component: MerkatorDemoComponent },
  { path: 'dossiers', component: MerkatorDemoComponent },
  { path: 'rapportages', component: MerkatorDemoComponent },
  { path: 'klic-meldingen', component: MerkatorDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
