import { Component, ViewChild, OnInit, ElementRef, Input, OnChanges, AfterViewInit } from '@angular/core';

declare var WebViewer: any;

@Component({
  selector: 'documents-viewer',
  templateUrl: './documents-viewer.component.html',
  styleUrls: ['./documents-viewer.component.css']
})
export class DocumentsViewerComponent implements OnInit, OnChanges, AfterViewInit {


  @Input() fileName: string;
  pathToFiles = '../files/';

  @ViewChild('viewer', null) viewer: ElementRef;
  wvInstance: any;

  ngOnInit() { 
  }


  ngAfterViewInit(): void {
    
  }


  ngOnChanges() {

    WebViewer({
      path: '../lib',
      initialDoc: this.pathToFiles + this.fileName
      // initialDoc: '../files/doc5.docx'
    }, this.viewer.nativeElement)
      // .then(instance => {
      // this.wvInstance = instance;
      .then(function(instance) {
        instance.setTheme('dark');
        // instance.loadDocument('../files/doc5.docx', {
        //   filename: 'doc5.docx'
        // });
        // instance.loadDocument(this.pathToFiles + this.fileName);
        // instance.loadDocument('..files/doc5.docx', {fileName: 'doc5.docx'});

      // or listen to events from the viewer element
      this.viewer.nativeElement.addEventListener('pageChanged', (e) => {
        const [ pageNumber ] = e.detail;
        console.log(`Current page is ${pageNumber}`);
      });

      instance.docViewer.on('documentLoaded', this.wvDocumentLoadedHandler)
    })
  }

}
