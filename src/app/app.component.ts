import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collection = this.fireStore.collection('product');
  opened = true;

  constructor(private fireStore: AngularFirestore) {
    console.log(fireStore);
  }
}
