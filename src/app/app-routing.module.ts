import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HerosComponent } from './heros/heros.component';
import { HeroeditComponent } from './heroedit/heroedit.component';
import { AddheroComponent } from './addhero/addhero.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: '',  redirectTo: '/heroes',pathMatch: 'full'
  },
  {
    path: 'addhero',  component: AddheroComponent
  },
  {
    path: 'cart',  component: CartComponent
  },
  {
    path: 'heroes',  component: HerosComponent,
    children:[   
        {
			    path: 'heroedit/:id',  component: HeroeditComponent
			  }
    
    ]
  },
  {
    path: 'forms',  component: FormsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
