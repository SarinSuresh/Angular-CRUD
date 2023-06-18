import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreManagerComponent } from './store-manager/store-manager.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'store/admin', pathMatch: 'full'
  },
  {

    path: 'store/admin', component: StoreManagerComponent
  },
  {
    path: 'store/add', component: AddItemComponent
  },
  {
    path: 'store/update/:itemId', component: UpdateItemComponent
  },
  {
    path: 'store/view/:itemId', component: ViewItemComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
