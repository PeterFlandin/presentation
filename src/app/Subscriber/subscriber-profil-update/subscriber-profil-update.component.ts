import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/models/profil';
import { ProfilService } from 'src/app/profil.service';

@Component({
  selector: 'app-subscriber-profil-update',
  templateUrl: './subscriber-profil-update.component.html',
  styleUrls: ['./subscriber-profil-update.component.css']
})
export class SubscriberProfilUpdateComponent {
  id!: number;
  profil: Profil = new Profil();

  constructor(private profilService: ProfilService,
    private route: ActivatedRoute, private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
}


  onSubmit(){
    this.profilService.updateProfil(this.id, this.profil).subscribe(data => {
  this.goToProfil();
  
    }, error => console.log(error));
  }

  goToProfil(){
    this.router.navigate(['/subscriber-profil']);
  }

}
