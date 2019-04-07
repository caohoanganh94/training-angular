import { Component, OnInit, Input } from '@angular/core';
import { Size } from 'src/app/models/size.enum';
import { Color } from 'src/app/models/color.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() size: Size = Size.Medium;
  @Input() color: Color = Color.PRIMARY;
  @Input() classes: string = '';
  @Input() url: string = '';

  constructor() { }

  ngOnInit() {
    this.classes = `btn btn-${this.size} btn-${this.color}`;
  }

}
