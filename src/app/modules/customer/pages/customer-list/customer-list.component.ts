import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/services/http.service';

import { GET_CUSTOMER_LIST } from 'src/app/shared/consts/api.const';
import { FILTER } from 'src/app/shared/consts/localStorage.const';
import { IPagination } from 'src/app/shared/models/pagination.model';
import { ICustomer } from '../../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customerList: ICustomer[];
  public filter: any;
  public pagination: IPagination | null

  constructor(private http: HttpService, private router: Router) {
    this.customerList = [];
    this.pagination = null
   }

  ngOnInit(): void {
    const localStorageData = localStorage.getItem(FILTER)
    console.log(localStorageData);
    
    this.filter = localStorageData ? JSON.parse(localStorageData) : {limit: 25, page: 1}
    this.fetchCustomerList();
  }

  public fetchCustomerList(): void {
    console.log(this.filter);
    
    this.http.getDataWithToken(GET_CUSTOMER_LIST, this.filter).subscribe(resp => {
      this.customerList = resp.data ? resp.data : [];
      this.pagination = {
        totalPage: resp.pagination?.total_page,
        totalData: resp.pagination?.total_data,
        page: this.filter.page
      }
    })
  }

  public onFilter(event: any): void {
    this.filter = {...this.filter, ...event};
    this.fetchCustomerList();
  }

  public onSelectPage(page: number): void {
    this.filter = {...this.filter, page}
    this.fetchCustomerList()
  }

  public onSelectRow(data: any): void {
    this.router.navigate(['customer/detail'], {
      queryParams: { id: data.id },
    });
  }

  public onClickCreate(): void {
    this.router.navigate(['customer/create']);
  }
}
