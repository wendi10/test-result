import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PaginationComponent } from './components/pagination/pagination.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';

@NgModule({
  declarations: [
    PaginationComponent,
    TableWrapperComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [
    PaginationComponent,
    TableWrapperComponent,
  ],
})
export class SharedModule {}
