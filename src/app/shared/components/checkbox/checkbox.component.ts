import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() id: string;
  @Input() value: any;
  @Input() checked: boolean = false;
  @Input() checkedItems: Array<any> = [];

  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    if (this.checkedItems.includes(this.value)) {
      this.checked = true;
    }
  }

  getCheckboxId() {
    return `checkbox-${this.id}`;
  }

  onChange() {
    this.toggle.emit(this.checked);

    if (this.checked) {
      this.checkedItems.push(this.value);
    } else {
      const index = this.checkedItems.indexOf(this.value);
      this.checkedItems.splice(index, 1);
    }
  }

}
