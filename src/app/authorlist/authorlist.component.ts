import { Component, OnInit } from '@angular/core';
import { AuthorObj } from '../models/authors';
import { AuthorServiceService } from '../author-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.component.html',
  styleUrls: ['./authorlist.component.css']
})
export class AuthorlistComponent implements OnInit   {
 
  constructor (private http: AuthorServiceService, private router: Router){}



  authors: AuthorObj[] = [];


 ngOnInit(): void {
  console.log(AuthorObj)
  this.getAll();
  }


  getAll() {
    this.http.getAuthorList().subscribe((authors) => {
      this.authors = authors;
    });
  }
    

}
