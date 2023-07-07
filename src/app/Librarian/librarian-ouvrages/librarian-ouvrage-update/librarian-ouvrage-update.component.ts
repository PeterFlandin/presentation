import { Component, OnInit } from '@angular/core';
import { LibrarianOuvrageService } from 'src/app/librarian-ouvrage.service';
import { Ouvrage } from 'src/app/models/ouvrage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-librarian-ouvrage-update',
  templateUrl: './librarian-ouvrage-update.component.html',
})
export class LibrarianOuvrageUpdateComponent implements OnInit {
  id!: number;

  ouvrage: Ouvrage = new Ouvrage();

  constructor(
    private ouvrageService: LibrarianOuvrageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ouvrageService.detailsOuvrage(this.id).subscribe(
      (data) => {
        this.ouvrage = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.ouvrageService.updateOuvrage(this.id, this.ouvrage).subscribe(
      (data) => {
        this.goToOuvrageList();
      },
      (error) => console.log(error)
    );
  }

  goToOuvrageList() {
    this.router.navigate(['/librarian-ouvrage']);
  }
}
