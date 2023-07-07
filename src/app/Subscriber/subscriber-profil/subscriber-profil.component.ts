import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from 'src/app/models/profil';
import { ProfilService } from 'src/app/profil.service';

@Component({
  selector: 'app-subscriber-profil',
  templateUrl: './subscriber-profil.component.html',
  styleUrls: ['./subscriber-profil.component.css']
})
export class SubscriberProfilComponent {

  profilById!: Profil

  constructor(private profilService : ProfilService, private router: Router) { }
  
  ngOnInit() {
		const userId = 1
		this.profilService.getProfilSubscriber(userId).subscribe(
			(data) => {
				this.profilById = data
			},
			(error) => {
				console.log(
					"Erreur lors de la récupération du profil utilisateur :",
					error
				)
			}
		)
	}

  updateProfil(id: number) {
    this.router.navigate(['/update-subscriber', id]);
    }
  

}
// updateSubscribers(id: number) {
//     this.router.navigate(['/update-Subscriber', id]);
//     }

//     deleteSubscriber(id: number) {
//       this.subscriberService.deleteSubscriber(id).subscribe(data => {
//         console.log(data);
//         this.getAll();
        
//       })
//     }

//     subscriberDetail(id: number) {
//       this.router.navigate(['/subscriber-detail', id]);
//     }

//     getCreate(){
//   this.router.navigate(['/create-subscriber']);
//      }

// }
