import { Component } from '@angular/core';
import { LibrarianOuvrageService } from '../../../librarian-ouvrage.service';
import { Ouvrage } from '../../../models/ouvrage';
import { Router } from '@angular/router';
import { AuthorObj } from 'src/app/models/authors';
import { TypeBook } from 'src/app/models/typeOfBook';
import { TypeOuvrageService } from 'src/app/type-ouvrage.service';

@Component({
  selector: 'app-librarian-ouvrage',
  templateUrl: './librarian-ouvrage.component.html',
  styleUrls: ['./librarian-ouvrage.component.css'],
})

export class LibrarianOuvrageComponent {
  authorObj: AuthorObj [] = [];
  typeBook: TypeBook [] = [];
  private _librarianOuvrage: Ouvrage[] = [];
  newLibrarianOuvrage: string = '';

  constructor(private http: LibrarianOuvrageService, private router: Router, private httpType: TypeOuvrageService ) {}

  ngOnInit() {
    this.getAll();
  }

  get librarianOuvrage(): Ouvrage[] {
    if (!this.newLibrarianOuvrage) {
      return this._librarianOuvrage;
    }
    return this._librarianOuvrage.filter(ouv => ouv.title.toLowerCase().includes(this.newLibrarianOuvrage.toLowerCase()));
  }

  getAll() {
    this.httpType.getOuvrageList().subscribe(data => {
          this.typeBook= data;
    this.http.getLibrarianOuvrage().subscribe((librarianOuvrage) => {
      this._librarianOuvrage = librarianOuvrage;
    })});
  }

getDetail(id: number) {
  this.router.navigate(['/ouvragedetail', id]);
}

  getDelete(id: number) {
    this.http.getDeleteLibrarianOuvrage(id).subscribe((data) => {
      console.log(data);
      this.getAll();
    });
  }


  getCreateLibrarianOuvrage() {
    this.router.navigate(['/createLibrarianOuvrage']);


}

}
