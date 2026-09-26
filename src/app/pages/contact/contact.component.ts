import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  submitted = false;

  form = {
    name: '',
    email: '',
    phone: '',
    enquiry: '',
    message: ''
  };

  submit(): void {
    this.submitted = true;
  }

  resetForm(): void {
    this.submitted = false;

    this.form = {
      name: '',
      email: '',
      phone: '',
      enquiry: '',
      message: ''
    };
  }
}