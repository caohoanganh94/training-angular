import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'src/app/shared/enums/color.enum';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent implements OnInit {
  @Input() color: Color = Color.PRIMARY;
  @Input() loading: boolean = false;
  @Input() classes: string = '';

  constructor() { }

  ngOnInit() {
    this.classes = `btn btn-${this.color} ${this.classes}`;
  }
}
