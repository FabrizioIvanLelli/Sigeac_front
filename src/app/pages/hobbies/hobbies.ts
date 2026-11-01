import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class Hobbies {
  hobbiesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.hobbiesForm = this.fb.group({
      hobbies: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get hobbies(): FormArray {
    return this.hobbiesForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.hobbiesForm.value);
  }

}
