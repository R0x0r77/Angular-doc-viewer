import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  // MatDialog
} from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MaterialModule } from './material';
import { MyDialogComponent } from 'app/components-extra/my-dialog/my-dialog.component';
import { ConfirmationDialogComponent } from 'app/components-extra/confirmation-dialog/confirmation-dialog.component';
// import { DocumentsViewerComponent } from 'app/components-extra/documents-viewer/documents-viewer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgxDocViewerModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    // DocumentsViewerComponent,
    MyDialogComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    MyDialogComponent,
    ConfirmationDialogComponent
  ],
})

export class AdminLayoutModule {}
