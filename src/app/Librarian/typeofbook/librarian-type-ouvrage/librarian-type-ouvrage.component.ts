import { Component, OnInit } from '@angular/core';
import { TypeOuvrageService } from '../../../type-ouvrage.service';
import { TypeBook } from '../../../models/typeOfBook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian-type-ouvrage',
  templateUrl: './librarian-type-ouvrage.component.html',
  styleUrls: ['./librarian-type-ouvrage.component.css'],
})
export class LibrarianTypeOuvrageComponent implements OnInit {

  private _typesOuvrage: TypeBook[] = [];
  searchQuery: string = '';

  get typesOuvrage(): TypeBook[] {
    if (!this.searchQuery) {
      return this._typesOuvrage;
    }
    return this._typesOuvrage.filter(ouv => ouv.type.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  constructor(private typeOuvrageService: TypeOuvrageService, private router: Router) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.typeOuvrageService.getOuvrageList().subscribe((typesOuvrage) => {
      this._typesOuvrage = typesOuvrage;
    });
  }

  getCreate() {
    this.router.navigate(['/createtypeouvrage']);
  }

  updateTypebook(id: number) {
    this.router.navigate(['/updateType', id]);
  }

  deleteType(id: number) {
    this.typeOuvrageService.deleteTypeofbook(id).subscribe(() => {
      this.getAll();
    });
  }

getDashboard() {
  this.router.navigate(['/dashboard']);
}
  

}
