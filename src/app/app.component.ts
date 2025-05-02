import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private cd: ChangeDetectorRef) {}

  actualizarVista() {
    this.cd.detectChanges(); // 🔥 Fuerza la actualización
  }
}