import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputType } from 'src/app/shared/enums/input-type.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: InputType = InputType.TEXT;
  @Input() placeholder: string = '';
  @Input() textarea: boolean = false;
  @Input() name: string = '';
  @Input() value: string = '';

  // @Output() input: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getInputId() {
    return `input-${this.name}`;
  }

  // onValueChanged(): void {
  //   this.input.emit(this.value);
  // }

}
