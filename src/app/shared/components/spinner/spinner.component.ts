import { Component, OnInit, Input } from '@angular/core';
import { SpinnerType } from '../../enums/spinner-type.enum';
import { Color } from '../../enums/color.enum';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() type: SpinnerType = SpinnerType.BORDER;
  @Input() color: Color = Color.PRIMARY;
  @Input() customClass: string = '';

  constructor() { }

  ngOnInit() {
  }

}
