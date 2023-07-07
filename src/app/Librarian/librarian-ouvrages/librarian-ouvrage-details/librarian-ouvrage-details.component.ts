import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrarianOuvrageService } from 'src/app/librarian-ouvrage.service';
import { Ouvrage } from 'src/app/models/ouvrage';

@Component({
  selector: 'app-librarian-ouvrage-details',
  templateUrl: './librarian-ouvrage-details.component.html',
})
export class LibrarianOuvrageDetailsComponent implements OnInit {
  id!: number;

  ouvrage!: Ouvrage;

  constructor(
    private ouvrageService: LibrarianOuvrageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ouvrage = new Ouvrage();
    this.ouvrageService.detailsOuvrage(this.id).subscribe((data) => {
      this.ouvrage = data;
    });
  }

  goToOuvrageList() {
    this.router.navigate(['/librarian-list']);
  }
}
