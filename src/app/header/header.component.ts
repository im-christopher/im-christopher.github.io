import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header!: Header; // Usa `!` para evitar valores undefined
  isLoading: boolean = true; // Nueva variable para el estado de carga

  constructor(public headerService: HeaderService) {
    this.headerService.getHeader().snapshotChanges().pipe(
      map((changes: DocumentChangeAction<Header>[]) =>
        changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() } as Header))
      )
    ).subscribe(data => {
      this.header = data[0];
      this.isLoading = false; // Marca la carga como completada
      console.log(this.header);
    });
  }
}
