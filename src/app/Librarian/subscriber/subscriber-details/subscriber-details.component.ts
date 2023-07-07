import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'src/app/models/subscriber';
import { SubscriberService } from 'src/app/subscriber.service';

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.component.html',
  styleUrls: ['./subscriber-details.component.css']
})
export class SubscriberDetailsComponent implements OnInit {

  id!: number;

subscriber!: Subscriber;

  constructor(private subscribeService: SubscriberService, private route: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
  this.subscriber = new Subscriber();
  this.subscribeService.detailsSubscriber(this.id).subscribe(
    data => {
      this.subscriber = data;
    }
  )
    }

    goToEmployeeList(){
      this.router.navigate(['/librarian-list']);
    }



}

