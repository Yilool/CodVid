import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateAll = true;

  setTrue(): void {
    this.stateAll = true;
  }

  setFalse(): void {
    this.stateAll = false;
  }
}
