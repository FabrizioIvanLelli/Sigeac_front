import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Solo RouterOutlet es necesario aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
