import { Component } from '@angular/core';

@Component({
  selector: 'app',
  host: {
    '[class.wasUpdated]': 'updated'
  },
  styles: [`
    :host(.wasUpdated) {
      background-color: red;
      display: block;
      overflow: hidden;
    }
  `],
  template: `
    <h4>boot successful</h4>

    <button (click)="updateMe($event)">Change background</button>
  `
})
export class AppComponent {
  private updated: boolean = false;

  updateMe(): void {
    this.updated = true;
  }
}
