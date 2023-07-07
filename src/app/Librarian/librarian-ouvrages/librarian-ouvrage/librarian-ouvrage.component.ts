import { Component, OnInit } from '@angular/core';
import { LibrarianOuvrageService } from '../../../librarian-ouvrage.service';
import { Ouvrage } from '../../../models/ouvrage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian-ouvrage',
  templateUrl: './librarian-ouvrage.component.html',
})
export class LibrarianOuvrageComponent implements OnInit {
  librarianOuvrage: Ouvrage[] = [];

  constructor(
    private ouvrageService: LibrarianOuvrageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.ouvrageService
      .getLibrarianOuvrageList()
      .subscribe((librarianOuvrage) => {
        this.librarianOuvrage = librarianOuvrage;
      });
  }

  updateOuvrage(id: number) {
    this.router.navigate(['librarian-ouvrage/update', id]);
  }

  deleteOuvrage(id: number) {
    this.ouvrageService.deleteOuvrage(id).subscribe((data) => {
      console.log(data);
      this.getAllBooks();
    });
  }

  createOuvrage() {
    this.router.navigate(['librarian-ouvrage/add']);
  }
}
