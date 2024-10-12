import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const tracksRoutes: Routes = [
  {
    path: '',
    component: TracksPageComponent
  }
];

