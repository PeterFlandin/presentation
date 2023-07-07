import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-librarian',
  templateUrl: './menu-librarian.component.html',
  styleUrls: ['./menu-librarian.component.css'],
})
export class MenuLibrarianComponent {
  constructor(private router: Router) {}

  logout(){
    this.router.navigate(['/login']);
   }
}
