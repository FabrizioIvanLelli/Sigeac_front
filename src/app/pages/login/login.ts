// 1. Importa ChangeDetectorRef desde @angular/core
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user';
import { LoginModel, AuthResponse } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  // 2. Inyecta ChangeDetectorRef en el constructor (private cdr)
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.errorMessage = '';

    const credentials: LoginModel = this.loginForm.value;

    this.userService.login(credentials).subscribe({
      next: (response: AuthResponse) => {
        sessionStorage.setItem('jwt_token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        if (err.status === 401) {
          this.errorMessage = 'Credenciales incorrectas. Verifica tu email y contraseña.';
        } else {
          this.errorMessage = 'Ocurrió un error en el servidor.';
        }

        // 3. Obliga a Angular a redibujar el HTML instantáneamente
        this.cdr.detectChanges();
      }
    });
  }
}
