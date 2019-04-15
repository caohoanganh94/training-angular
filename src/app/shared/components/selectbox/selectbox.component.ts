import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent implements OnInit {
  @Input() value: any;
  @Input() options: Array<any>;
  @Input() customClass: string = '';
  @Input() multiple: boolean = false;

  @Output() select: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getOptionValue(option) {
    if (option.value) return option.value;
    else if (option.label) return option.label;
    else if (option.id) return option.id;
    return option;
  }

  getOptionLabel(option) {
    if (option.label) return option.label;
    else if (option.name) return option.name;
    return option;
  }

  onChange(select) {
    this.select.emit(select.value);
  }
}
