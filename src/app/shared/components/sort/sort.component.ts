import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Input() order: string;
  @Input() field: string;
  @Input() customClass: string = '';

  constructor() { }

  ngOnInit() {
  }

  isDisabled(orderBy) {
    return this.order !== `${this.field},${orderBy}`;
  }

}
