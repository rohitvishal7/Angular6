import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedFeature = 'recipe';

    ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyDHybWkqjRkw0GhCL6FxvuHIpkCHph_q7o",
        authDomain: "ng-recipe-book-a48b4.firebaseapp.com"
      });
    }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
