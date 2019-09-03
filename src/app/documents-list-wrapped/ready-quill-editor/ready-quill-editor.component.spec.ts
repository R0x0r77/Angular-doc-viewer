import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyQuillEditorComponent } from './ready-quill-editor.component';

describe('ReadyQuillEditorComponent', () => {
  let component: ReadyQuillEditorComponent;
  let fixture: ComponentFixture<ReadyQuillEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyQuillEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyQuillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
