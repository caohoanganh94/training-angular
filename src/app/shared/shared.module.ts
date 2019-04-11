import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonSubmitComponent } from './components/button-submit/button-submit.component';

const PIPES = [];

const COMPONENTS = [
  ButtonComponent,
  CheckboxComponent,
  ButtonSubmitComponent
];

@NgModule({
  declarations: [...PIPES, ...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...PIPES, ...COMPONENTS]
})
export class SharedModule { }
