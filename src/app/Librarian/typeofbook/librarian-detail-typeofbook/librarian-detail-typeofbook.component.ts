import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeBook } from 'src/app/models/typeOfBook';
import { TypeOuvrageService } from 'src/app/type-ouvrage.service';

@Component({
  selector: 'app-librarian-detail-typeofbook',
  templateUrl: './librarian-detail-typeofbook.component.html',
  styleUrls: ['./librarian-detail-typeofbook.component.css']
})
export class LibrarianDetailTypeofbookComponent {

  id!: number;
  
  typeofbook!: TypeBook;
  
    constructor(private typeouvrageservice: TypeOuvrageService, private route: ActivatedRoute, private router: Router) { }
    
      ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
    
    this.typeofbook = new TypeBook();
    this.typeouvrageservice.detailsTypeofbook(this.id).subscribe(
      data => {
        this.typeofbook = data;
      }
    )
      }


}
