import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostListingComponent } from './listing.component';
import { SortComponent } from 'src/app/shared/components/sort/sort.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';
import { SelectboxComponent } from 'src/app/shared/components/selectbox/selectbox.component';

describe('PostListingComponent', () => {
  let component: PostListingComponent;
  let fixture: ComponentFixture<PostListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        PostListingComponent,
        SelectboxComponent,
        CheckboxComponent,
        SpinnerComponent,
        ButtonComponent,
        SortComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
