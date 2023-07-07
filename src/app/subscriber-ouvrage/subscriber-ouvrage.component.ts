import { Component } from '@angular/core';

import { Ouvrage } from '../models/ouvrage';
import { FormControl } from '@angular/forms';
import { OuvrageService } from '../ouvrage.service';

@Component({
  selector: 'app-subscriber-ouvrage',
  templateUrl: './subscriber-ouvrage.component.html',
  styleUrls: ['./subscriber-ouvrage.component.css'],
  providers: [OuvrageService]
})
export class SubscriberOuvrageComponent {

  // myControl = new FormControl();
  // options = ['Option 1', 'Option 2', 'Option 3'];
  
  books: Ouvrage[] = [];
  
  constructor(private ouvrageService: OuvrageService) {
  }
  
  ngOnInit() {
    this.getBooks()

  }
  getBooks() {
    this.ouvrageService.getBooks()
      .subscribe(data => {
        this.books = data;
      });
  }
  
}
