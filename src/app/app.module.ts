import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLibrarianComponent } from './Librarian/menu-librarian/menu-librarian.component';
import { LibrarianOuvrageComponent } from './Librarian/librarian-ouvrages/librarian-ouvrage/librarian-ouvrage.component';
import { LibrarianTypeOuvrageComponent } from './Librarian/typeofbook/librarian-type-ouvrage/librarian-type-ouvrage.component';
import { LibrarianEmpruntComponent } from './Librarian/librarian-emprunt/librarian-emprunt.component';
import { LoginComponent } from './login/login.component';
import { MenuSubscriberComponent } from './menu-subscriber/menu-subscriber.component';
import { SubscriberOuvrageComponent } from './subscriber-ouvrage/subscriber-ouvrage.component';
import { HttpClientModule } from '@angular/common/http';
import { ListsubscriberComponent } from './Librarian/subscriber/listsubscriber/listsubscriber.component';
import { CreateSubscriberComponent } from './Librarian/subscriber/create-subscriber/create-subscriber.component';
import { FormsModule } from '@angular/forms';
import { UpdateSubscriberComponent } from './Librarian/subscriber/update-subscriber/update-subscriber.component';
import { SubscriberDetailsComponent } from './Librarian/subscriber/subscriber-details/subscriber-details.component';
import { LibearianCreateTypeofbookComponent } from './Librarian/typeofbook/libearian-create-typeofbook/libearian-create-typeofbook.component';
import { LibrarianDetailTypeofbookComponent } from './Librarian/typeofbook/librarian-detail-typeofbook/librarian-detail-typeofbook.component';
import { LibrarianUpdateTypeofbookComponent } from './Librarian/typeofbook/librarian-update-typeofbook/librarian-update-typeofbook.component';
import { LibrarianCreateOuvrageComponent } from './Librarian/librarian-ouvrages/librarian-create-ouvrage/librarian-create-ouvrage.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { LibrarianOuvrageDetailsComponent } from './Librarian/librarian-ouvrages/librarian-ouvrage-details/librarian-ouvrage-details.component';
import { LibrarianOuvrageUpdateComponent } from './Librarian/librarian-ouvrages/librarian-ouvrage-update/librarian-ouvrage-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLibrarianComponent,
    LibrarianOuvrageComponent,
    LibrarianTypeOuvrageComponent,
    LibrarianEmpruntComponent,
    LoginComponent,
    MenuSubscriberComponent,
    SubscriberOuvrageComponent,
    ListsubscriberComponent,
    CreateSubscriberComponent,
    UpdateSubscriberComponent,
    SubscriberDetailsComponent,
    LibearianCreateTypeofbookComponent,
    LibrarianDetailTypeofbookComponent,
    LibrarianUpdateTypeofbookComponent,
    LibrarianCreateOuvrageComponent,
    AuthorlistComponent,
    LibrarianOuvrageDetailsComponent,
    LibrarianOuvrageUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
