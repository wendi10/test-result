import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss'],
})
export class TableWrapperComponent {
  @Input() disabled: boolean = false;
}
