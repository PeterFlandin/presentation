import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  role!: string;


constructor(private router: Router) { }

  login() {
    if (this.role === 'subscriber') {
      if (this.username === 'subscriber' && this.password === 'subscriberpass') {
       this.goToSubscriber()
        console.log('Connexion en tant qu\'abonné');
      } else {
        console.log('Identifiants incorrects');
      }
    } else if (this.role === 'librarian') {
      if (this.username === 'librarian' && this.password === 'librarianpass') {
        this.goToLibrarianDashboard();

        console.log('Connexion en tant que bibliothécaire');
      } else {
        console.log('Identifiants incorrects');
      }
    }
  }

  goToLibrarianDashboard(){
    this.router.navigate(['/dashboard']);
   }

   goToSubscriber(){
    this.router.navigate(['/menu-subscriber'])
   }



}
