import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'best-quotes';
  showForm = false;
  quotes: Quotation[] = QUOTES;


  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
