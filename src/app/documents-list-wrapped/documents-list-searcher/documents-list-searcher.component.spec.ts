import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsListSearcherComponent } from './documents-list-searcher.component';

describe('DocumentsListSearcherComponent', () => {
  let component: DocumentsListSearcherComponent;
  let fixture: ComponentFixture<DocumentsListSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsListSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsListSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
