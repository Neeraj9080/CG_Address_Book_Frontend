import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AddressBook';

  persons = [
    { fullname: 'Arjun Mehra', address: 'House No. - 14, Sunrise Avenue', city: 'Bhopal', state: 'Madhya Pradesh', zip: '462001', phone: '9423456781' },
    { fullname: 'Priya Singh', address: 'House No. - 86, Blossom Street', city: 'Jaipur', state: 'Rajasthan', zip: '302001', phone: '9812345678' },
    { fullname: 'Ravi Khanna', address: 'House No. - 112, Maple Road', city: 'Pune', state: 'Maharashtra', zip: '411001', phone: '9823456789' },
    { fullname: 'Neha Kapoor', address: 'House No. - 8, Garden Lane', city: 'Delhi', state: 'Delhi', zip: '110001', phone: '9876543210' },
    { fullname: 'Sanjay Rao', address: 'House No. - 57, Silver Birch Drive', city: 'Bengaluru', state: 'Karnataka', zip: '560001', phone: '9445678901' },
    { fullname: 'Ananya Sharma', address: 'House No. - 21, Emerald Circle', city: 'Lucknow', state: 'Uttar Pradesh', zip: '226001', phone: '9790123456' }
  ];

  isFormOpen = false;   // Controls whether the form or table is shown
  editingIndex: number | null = null;
  newPerson = { fullname: '', address: '', city: '', state: '', zip: '', phone: '' };

  // Opens the form and hides the table, text, and button
  openForm() {
    this.isFormOpen = true;
  }

  // Closes the form and shows the table, text, and button again
  closeForm() {
    this.isFormOpen = false;
    this.resetForm();
  }

  // Adds a new person to the table and hides the form
  addNewPerson() {
    if (this.newPerson.fullname && this.newPerson.phone) {
      this.persons.push({ ...this.newPerson });
      this.closeForm();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  resetForm() {
    this.newPerson = { fullname: '', address: '', city: '', state: '', zip: '', phone: '' };
  }

  editPerson(index: number) {
    this.editingIndex = index;
  }

  saveEdit() {
    this.editingIndex = null;
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
  }
}
