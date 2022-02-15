import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'best-quotes';
  showForm = false;


  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
