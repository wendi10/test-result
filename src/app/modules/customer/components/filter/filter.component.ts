import { Component, Output, EventEmitter, OnInit,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FILTER } from 'src/app/shared/consts/localStorage.const';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{

  public formGroup: FormGroup = new FormGroup({
    search: new FormControl(''),
    status: new FormControl(''),
    orderBy: new FormControl('ASC'),
    limit: new FormControl(25),
    page: new FormControl(1),
  })

  @Output() onChangeFilter = new EventEmitter();

  ngOnInit(): void {
    this.initFormGroup()
  }

  public fetchFilter(): void {
    const requestData = this.formGroup.getRawValue()
    localStorage.setItem(FILTER, JSON.stringify(requestData))
    this.onChangeFilter.emit(requestData);
  }

  public resetFilter(): void {
    this.formGroup.reset();
    this.formGroup.patchValue({limit: 25, page: 1, orderBy: 'ASC'});
    localStorage.removeItem(FILTER);
    this.onChangeFilter.emit(this.formGroup.getRawValue());
  }

  private initFormGroup(): void {
    const localStorageData = localStorage.getItem(FILTER)
    
    if(localStorageData){
      this.formGroup.patchValue(JSON.parse(localStorageData))
    }
  }
}
