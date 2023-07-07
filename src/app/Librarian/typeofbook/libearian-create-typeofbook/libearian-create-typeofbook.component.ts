import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeBook } from 'src/app/models/typeOfBook';
import { TypeOuvrageService } from 'src/app/type-ouvrage.service';

@Component({
  selector: 'app-libearian-create-typeofbook',
  templateUrl: './libearian-create-typeofbook.component.html',
  styleUrls: ['./libearian-create-typeofbook.component.css']
})
export class LibearianCreateTypeofbookComponent {

  typeofbook: TypeBook = new TypeBook();
  

  constructor(private typeOuvrageService: TypeOuvrageService, private router: Router) { 
  }
  

  ngOnInit(): void {
  }


  saveTypeOfBook(){
    this.typeOuvrageService.createTypeofbook(this.typeofbook).subscribe(data => {
      console.log(data);
    });
   }

  goTotypebookList() {
    this.router.navigate(['/librarian-typeOuvrage']);
  }


  onSubmit(){
    console.log(this.typeofbook);
    this.saveTypeOfBook();
  }

}
