import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuLibrarianComponent } from './Librarian/menu-librarian/menu-librarian.component';
import { LibrarianOuvrageComponent } from './Librarian/librarian-ouvrages/librarian-ouvrage/librarian-ouvrage.component';
import { LibrarianTypeOuvrageComponent } from './Librarian/typeofbook/librarian-type-ouvrage/librarian-type-ouvrage.component';
import { LibrarianEmpruntComponent } from './Librarian/librarian-emprunt/librarian-emprunt.component';
import { LoginComponent } from './login/login.component';
import { MenuSubscriberComponent } from './menu-subscriber/menu-subscriber.component';
import { SubscriberOuvrageComponent } from './subscriber-ouvrage/subscriber-ouvrage.component';
import { ListsubscriberComponent } from './Librarian/subscriber/listsubscriber/listsubscriber.component';
import { UpdateSubscriberComponent } from './Librarian/subscriber/update-subscriber/update-subscriber.component';
import { SubscriberDetailsComponent } from './Librarian/subscriber/subscriber-details/subscriber-details.component';
import { CreateSubscriberComponent } from './Librarian/subscriber/create-subscriber/create-subscriber.component';
import { LibearianCreateTypeofbookComponent } from './Librarian/typeofbook/libearian-create-typeofbook/libearian-create-typeofbook.component';
import { LibrarianUpdateTypeofbookComponent } from './Librarian/typeofbook/librarian-update-typeofbook/librarian-update-typeofbook.component';
import { LibrarianCreateOuvrageComponent } from './Librarian/librarian-ouvrages/librarian-create-ouvrage/librarian-create-ouvrage.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu-librarian', component: MenuLibrarianComponent },
  { path: 'menu-subscriber', component: MenuSubscriberComponent },
  { path: 'subscriber-ouvrage', component: SubscriberOuvrageComponent },
  { path: 'librarian-ouvrage', component: LibrarianOuvrageComponent },
  { path: 'librarian-typeOuvrage', component: LibrarianTypeOuvrageComponent },
  { path: 'librarian-emprunt', component: LibrarianEmpruntComponent },
  { path: 'subscriber-ouvrage', component: SubscriberOuvrageComponent },
  { path: 'librarian-list', component: ListsubscriberComponent},
  { path: 'update-Subscriber/:id', component : UpdateSubscriberComponent },
  { path: 'subscriber-detail/:id', component : SubscriberDetailsComponent },
  { path: 'create-subscriber', component : CreateSubscriberComponent },
  { path: 'dashboard', component:MenuLibrarianComponent },
  { path: 'createtypeouvrage', component: LibearianCreateTypeofbookComponent},
  {path: 'updateType/:id', component:LibrarianUpdateTypeofbookComponent },
  {path: 'createLibrarianOuvrage', component: LibrarianCreateOuvrageComponent },
  {path: 'authorlist' , component : AuthorlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
