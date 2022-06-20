import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from 'src/app/services/http.service';

import { GET_CUSTOMER_DETAIL } from 'src/app/shared/consts/api.const';
import { ICustomer } from '../../customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  id: number;
  detailCustomer: ICustomer | undefined

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) { 
    this.id = parseInt(this.route.snapshot.queryParams['id']);
    this.detailCustomer = undefined
  }

  ngOnInit(): void {
    this.fetchDetail()
  }

  public fetchDetail(): void{
    this.http.getDataWithToken(GET_CUSTOMER_DETAIL, {id: this.id}).subscribe((resp) => {
      this.detailCustomer = resp.data;
    })
  }

  public setDisplayDetail(value?:string): string{
    return value ? value : '-'
  }

  public redirectToList(): void {
    this.router.navigate(['./customer']);
  }
}
