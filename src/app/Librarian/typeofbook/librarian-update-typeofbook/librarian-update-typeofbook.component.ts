import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeBook } from 'src/app/models/typeOfBook';
import { TypeOuvrageService } from 'src/app/type-ouvrage.service';

@Component({
  selector: 'app-librarian-update-typeofbook',
  templateUrl: './librarian-update-typeofbook.component.html',
  styleUrls: ['./librarian-update-typeofbook.component.css']
})
export class LibrarianUpdateTypeofbookComponent {

  id!: number;

  typeofbook: TypeBook = new TypeBook();
  
    constructor(private typeouvrageservice: TypeOuvrageService,
      private route: ActivatedRoute, private router: Router
      ) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
    
      this.typeouvrageservice.detailsTypeofbook(this.id).subscribe(data => {
        this.typeofbook = data;
    }, error => {
        console.log(error);
    }
      );
  }
  
  onSubmit(){
    this.typeouvrageservice.updateTypeofbook(this.id, this.typeofbook).subscribe(data => {
  this.goToTypeList();
  
    }, error => console.log(error));
  }
  
  
  goToTypeList(){
    this.router.navigate(['/librarian-typeOuvrage']);
  }

  updateType(id: number) {
    this.router.navigate(['/', id]);
    }

}
