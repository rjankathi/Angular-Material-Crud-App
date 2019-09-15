import { LoggerService } from '../../../../core/logger/logger.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { ContactService } from '@app/features/contact/shared/contact.service';
import { Contact } from '@app/features/contact/shared/contact';
import { ConfirmedDialogComponent } from '@app/shared';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource();
  screenHeight: any;
  screenWidth: any;

  @ViewChild(MatPaginator, { static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort: MatSort;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
  this.screenHeight = window.innerHeight;
  this.screenWidth = window.innerWidth;
  this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
  this.setDisplayedColumns();
}

  constructor(private contactService: ContactService,
              private logger: LoggerService,
              private dialog: MatDialog) {
                this.screenHeight = window.screen.height;
                this.screenWidth = window.screen.width;
                this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
                this.setDisplayedColumns();
              }

  ngOnInit() {
    this.loadContacts();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

loadContacts() {
    this.contactService.getContacts().subscribe(data => {
        this.dataSource.data = data;
    });
}

editContact(id: number): void {

    this.contactService.getContact(id).subscribe(data => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height = '300px';
        dialogConfig.width = '450px';
        dialogConfig.data = data;

        const dialogRef = this.dialog.open(ContactDetailComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (!result) {
                return;
            }
            this.contactService.updateContact(result)
                .subscribe(_ => this.loadContacts());
        });
    });
}

deleteContact(contact: Contact): void {
    // Create configuration for the dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '200px';
    dialogConfig.width = '400px';
    dialogConfig.data = {
        title: `Delete  ${contact.firstName} ${contact.lastName}`,
        message: 'Are you sure?'
    };

    const dialogRef = this.dialog.open(ConfirmedDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.dataSource.data = this.dataSource.data.filter(e => e !== contact);
            this.contactService.deleteContact(contact).subscribe();
        }
    });
}

getFullName(contact: Contact): string {
    return `${contact.firstName} ${contact.lastName}`;
}

getAddress(contact: Contact): string {
    return `${contact.street} ${contact.city}, ${contact.state}, ${contact.zip}`;
}

/**
 * Update a list of table columns to be displayed based on the width of the screen.
 */
setDisplayedColumns() {
    if (this.screenWidth < 420) {
        this.displayedColumns = ['id', 'fullName', 'work', 'action'];
    } else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
        this.displayedColumns = ['id', 'fullName', 'email', 'work', 'state', 'action'];
    } else {
        this.displayedColumns = ['id', 'fullName', 'email', 'work', 'address', 'action'];
    }
}
}
