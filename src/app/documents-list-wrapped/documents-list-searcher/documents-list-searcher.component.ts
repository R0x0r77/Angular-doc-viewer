import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MyDocument } from '../model/my-document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'documents-list-searcher',
  templateUrl: './documents-list-searcher.component.html',
  styleUrls: ['./documents-list-searcher.component.css']
})
export class DocumentsListSearcherComponent implements OnInit {

  @Output() openingDocumentId = new EventEmitter<number>();
  searchText;
  documents: MyDocument[];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    // this.openAllDocuments;
  }

  openDocument(id: number) {
    this.openingDocumentId.emit(id);
  }

  openAllDocuments() {
    this.documentService.getAllDocuments().subscribe(res => this.documents = res);
  }

}
