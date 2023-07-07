import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../../models/subscriber';
import { SubscriberService } from '../../../subscriber.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-subscriber',
  templateUrl: './update-subscriber.component.html',
  styleUrls: ['./update-subscriber.component.css']
})
export class UpdateSubscriberComponent implements OnInit {

  id!: number;

subscriber: Subscriber = new Subscriber();

  constructor(private subscriberService: SubscriberService,
    private route: ActivatedRoute, private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  
    this.subscriberService.detailsSubscriber(this.id).subscribe(data => {
      this.subscriber = data;
  }, error => {
      console.log(error);
  }
    );
}

onSubmit(){
  this.subscriberService.updateSubscribers(this.id, this.subscriber).subscribe(data => {
this.goToEmployeeList();

  }, error => console.log(error));
}


goToEmployeeList(){
  this.router.navigate(['/librarian-list']);
}

}
