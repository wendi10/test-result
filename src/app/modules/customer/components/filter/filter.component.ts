import { Component, Output, EventEmitter,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  public formGroup: FormGroup = new FormGroup({
    search: new FormControl(''),
    status: new FormControl(''),
    orderBy: new FormControl('ASC'),
    limit: new FormControl(25),
    page: new FormControl(1),
  })

  @Output() onChangeFilter = new EventEmitter();

  constructor() { 
  }

  public fetchFilter(): void {
    this.onChangeFilter.emit(this.formGroup.getRawValue());
  }
}
