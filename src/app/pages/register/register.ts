import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  loadTestAddress() {
    this.registerForm.patchValue({
      address: {
        street: 'Av. Vélez Sarsfield 123',
        city: 'Córdoba'
      }
    });
  }
}
