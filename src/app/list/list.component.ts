import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotation } from '../models/quotation';
import { QuotationEvent } from '../models/quotation.event';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output() vote = new EventEmitter<QuotationEvent>();
  @Input()
  quotes: Quotation[] | undefined;

  //dzięki tej metodzie nie trzeba zmieniać html ponieważ przyjmuje ona takie same parametry jak ta z app component
  addVote(quotation: Quotation, value: number) {
    this.vote.emit({ quotation, value });
  }
}
