import { Component } from '@angular/core';
import { Interests } from '../models/interests/interests.model';
import { InterestsService } from '../services/interests-service/interests.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-interests',
  standalone: false,
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {

  interests: Interests[] = [];
  
    constructor(public interestsService: InterestsService) {
      console.log(this.interestsService);
      this.interestsService.getInterests().snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data()
          }))
        )
      ).subscribe(data => {
        this.interests = data;
        console.log(this.interests);
      });
    }

}
