import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortComponent } from './components/sort/sort.component';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonSubmitComponent } from './components/button-submit/button-submit.component';
import { SelectboxComponent } from './components/selectbox/selectbox.component';

const PIPES = [];

const COMPONENTS = [
  SortComponent,
  ButtonComponent,
  SpinnerComponent,
  CheckboxComponent,
  SelectboxComponent,
  ButtonSubmitComponent,
];

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
