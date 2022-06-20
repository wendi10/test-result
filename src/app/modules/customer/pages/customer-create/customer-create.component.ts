import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/services/http.service';
import { POST_CUSTOMER } from 'src/app/shared/consts/api.const';

import { GROUP_OPTIONS } from '../../customer.const';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent {
  public formGroup: FormGroup = new FormGroup({
    username:new FormControl('', [Validators.required]),
    first_name:new FormControl('', [Validators.required]),
    last_name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
    birth_date:new FormControl('', [Validators.required]),
    basic_salary:new FormControl('', [Validators.required]),
    status:new FormControl('', [Validators.required]),
    group:new FormControl('', [Validators.required]),
    description:new FormControl('', [Validators.required]),
  })
  public groupOptions: string[];
  public currentDate: Date;


  constructor(private http: HttpService, private router: Router, private datePipe: DatePipe) { 
    this.groupOptions = GROUP_OPTIONS;
    this.currentDate = new Date()
  }

  public handleCreateCustomer(): void {
    let bodyRequest = this.formGroup.getRawValue();
    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched()
      return
    }

    bodyRequest.birth_date = this.datePipe.transform(bodyRequest.birth_date, 'yyyy-MM-dd');
    bodyRequest.description = this.datePipe.transform(bodyRequest.description,'yyyy-MM-dd');

    this.http.postDataWithToken(POST_CUSTOMER, bodyRequest).subscribe(resp => {
      alert(resp.message);
      this.router.navigate(['/customer'])
    })
  }

  public redirectToCustomerList(): void{
    this.router.navigate(['./customer']);
  }

}
