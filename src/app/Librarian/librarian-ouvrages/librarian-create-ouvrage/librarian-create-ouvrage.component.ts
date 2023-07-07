import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthorServiceService } from 'src/app/author-service.service';
import { LibrarianOuvrageService } from 'src/app/librarian-ouvrage.service';
import { AuthorObj } from 'src/app/models/authors';
import { Ouvrage } from 'src/app/models/ouvrage';
import { TypeBook } from 'src/app/models/typeOfBook';
import { TypeOuvrageService } from 'src/app/type-ouvrage.service';

@Component({
  selector: 'app-librarian-create-ouvrage',
  templateUrl: './librarian-create-ouvrage.component.html',
  styleUrls: ['./librarian-create-ouvrage.component.css']
})
export class LibrarianCreateOuvrageComponent implements OnInit {

  
  ouvrage: Ouvrage = new Ouvrage();
  typeofbook: TypeBook = new TypeBook();
  authorObj: AuthorObj = new AuthorObj();

constructor(private http: LibrarianOuvrageService, private router: Router , private httpType: TypeOuvrageService, private httpAuthor: AuthorServiceService) { }


ngOnInit(): void {
  console.log(this.authorObj)
  };


  saveOuvrage() {
    this.httpType.createTypeofbook(this.typeofbook).pipe(
      switchMap((typeOfBookResponse) => {
        console.log(typeOfBookResponse);
        return this.httpAuthor.createAuthor(this.authorObj);
      }),
      switchMap((authorResponse) => {
        console.log(authorResponse);
        return this.http.getCreateLibrarianOuvrage(this.ouvrage);
      })
    ).subscribe((ouvrageResponse) => {
      console.log(ouvrageResponse);
      this.goToOuvrageList();
    });
      };

  

 goToOuvrageList(){
  this.router.navigate(['/librarian-ouvrage']);
 }


 onSubmit(){
  console.log(this.ouvrage);
  this.saveOuvrage();
 }




}
