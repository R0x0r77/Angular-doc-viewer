import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DocumentService } from '../document.service';
import { MyDocument } from '../model/my-document';

@Component({
  selector: 'ready-quill-editor',
  templateUrl: './ready-quill-editor.component.html',
  styleUrls: ['./ready-quill-editor.component.css']
})
export class ReadyQuillEditorComponent implements OnInit, OnChanges {

  @Input() openingDocumentId: number;
  editorForm: FormGroup;
  editorContent: string;

  htmlText = '';

  document: MyDocument = new MyDocument();

  constructor(private DocumentService: DocumentService) { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      title: new FormControl(''),
      editor: new FormControl(null)
    })
  }

  editorStyle = {
    height: '300px'
  }

  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    this.document.title = this.editorForm.get('title').value;
    this.document.body = this.editorContent;
    this.DocumentService.createDocument(this.document).subscribe();
  }

  openDocument() {
    this.editorForm.setValue({
      title: this.document.title,
      editor: this.document.body
    })
  }

  ngOnChanges() {
    this.DocumentService.getDocument(this.openingDocumentId).subscribe(res => this.document = res);
  }

}
