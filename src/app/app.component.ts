import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger, MatTableDataSource, MatPaginator, MatTable } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M2 Connect';
  displayedColumns = ['name', 'email', 'subject', 'message'];

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  contactForm: FormGroup;
  contactList: any[];
  dataSource = new MatTableDataSource<any[]>();

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormSubject: ['', Validators.required],
      contactFormMessage: ['', Validators.required]
    });

    // get all users contact info
    db.list('user-contacts').valueChanges().subscribe(contactList => {
        this.contactList = contactList;
        let dataSourceObjeect = new MatTableDataSource<any[]>(this.contactList);
        this.dataSource = dataSourceObjeect;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  triggerMenu() {
    this.trigger.openMenu();
  }

  saveContactInfo() {
    if (this.contactForm.valid) {
      this.db.list('user-contacts').push(this.contactForm.value);
    }
  }
}
