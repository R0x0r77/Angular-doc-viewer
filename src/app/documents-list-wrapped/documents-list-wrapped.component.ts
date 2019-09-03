import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'documents-list-wrapped',
  templateUrl: './documents-list-wrapped.component.html',
  styleUrls: ['./documents-list-wrapped.component.css']
})
export class DocumentsListWrappedComponent implements OnInit {

  openingDocumentId: number = 21;

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

  editorForm: FormGroup;

  editorStyle = {
    height: '300px;'
  }


  onSubmit() {
    console.log(this.editorForm.get('editor').value);
  }

  openDocument(id: number) {
    this.openingDocumentId = id;
  }
}
