import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'places'},
  { path: 'places', component: PlacesComponent },
  { path: 'forecast', component: ForecastComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static components = [PlacesComponent, ForecastComponent]
}
