import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { MaterialFormsModule } from '@app/shared/forms/material-forms.module';

import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactService } from './shared/contact.service';


@NgModule({
  imports: [
    SharedModule,
    MaterialFormsModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactDetailComponent,
    ContactListComponent,
    NewContactComponent
  ],
  providers: [
    ContactService
  ],
  entryComponents: [
    ContactDetailComponent
  ]
})
export class ContactsModule { }
