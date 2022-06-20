import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './pages/customer-create/customer-create.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            component: CustomerListComponent,
            pathMatch: 'full',
        },
        {
            path: 'detail',
            component: CustomerDetailComponent,
        },
        {
            path: 'create',
            component: CustomerCreateComponent,
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
