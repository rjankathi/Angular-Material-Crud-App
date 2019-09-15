import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'core';
import { ContactService } from '@app/features/contact/shared/contact.service';
import { Contact } from '@app/features/contact/shared/contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  title = 'Create Contact';
  personalForm: FormGroup;
  workForm: FormGroup;
  addressForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private contactService: ContactService,
               private logger: LoggerService) { }

  ngOnInit() {
      this.buildPersonalForm();
      this.buildWorkForm();
      this.buildAddressForm();
  }

  buildPersonalForm(): void {
    this.personalForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email] ]
    });
  }

  buildWorkForm(): void {
    this.workForm = this.formBuilder.group({
        work: ['', Validators.required]
    });
  }

  buildAddressForm(): void {
    this.addressForm = this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required ],
        zip: ['', Validators.required],
    });
  }

  save() {
    if (this.invalidForms()) {
      return;
    }

    const newContact = this.getContact();
    this.logger.log(`New Contact: ${newContact}`);

    this.contactService.addContact(newContact).subscribe(result => {
        if (result) {
            // go to Contact List page
            this.router.navigate(['/']);
        }
    });
}

/**
 * Return true if at least either personForm, workForm or addressForm is invalid
 */
invalidForms(): boolean {
    return (this.personalForm.invalid ||
        this.workForm.invalid ||
        this.addressForm.invalid);
}
    /**
     * Return Contact instance by combining the following.
     *   personalForm.value => firstName, lastName, email
     *   workForm.value => work
     *   addressForm.value => street, city, state, zip
     */
    getContact(): Contact {
      return { ...this.personalForm.value, ...this.workForm.value, ...this.addressForm.value };
  }
}