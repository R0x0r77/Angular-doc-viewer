import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Documents } from 'resources/documents';
import { MyDialogComponent } from 'app/components-extra/my-dialog/my-dialog.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(
    private dialog: MatDialog
    ) {
  }

  ngOnInit() {
    
  }

  openMyDialog(url: string) {
    const dialogRef = this.dialog.open(MyDialogComponent,{
      width: window.innerWidth + 'px',
      height: 0.8 * window.innerHeight + 'px',
      data:{
        message: url,
        buttonText: {
          cancel: 'Close and return to the list'
        }
      },
    });
  }


  searchText;
  documents = new Documents().getDocuments();

} 
