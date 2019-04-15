import { Component, OnInit, Input } from '@angular/core';
import { Size } from 'src/app/shared/enums/size.enum';
import { Color } from 'src/app/shared/enums/color.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() size: Size = Size.Medium;
  @Input() color: Color = Color.PRIMARY;
  @Input() url: string = '#';
  @Input() customClass: string = '';

  constructor() { }

  ngOnInit() {
    this.customClass = `btn btn-${this.size} btn-${this.color}`;
  }

  onClick(event): void {
    if (this.url === '#') {
      event.preventDefault();
    }
  }

}
