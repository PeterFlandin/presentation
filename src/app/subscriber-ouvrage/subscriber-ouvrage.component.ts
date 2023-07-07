import { Component } from '@angular/core';
import { OuvrageService } from '../ouvrage.service';
import { Ouvrage } from '../models/ouvrage';

@Component({
  selector: 'app-subscriber-ouvrage',
  templateUrl: './subscriber-ouvrage.component.html',
  styleUrls: ['./subscriber-ouvrage.component.css'],
  providers: [OuvrageService]
})
export class SubscriberOuvrageComponent {
  books: Ouvrage[] = [];

  constructor(private ouvrageService: OuvrageService) {}

  getBooks() {
    this.ouvrageService.getBooks()
      .subscribe(data => {
        this.books = data;
        console.log(data)
      });
  }
}
