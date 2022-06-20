import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './localStorage.service';

@NgModule({
  providers: [HttpService, StorageService],
  imports: [HttpClientModule],
})

export class ServiceModule {}
