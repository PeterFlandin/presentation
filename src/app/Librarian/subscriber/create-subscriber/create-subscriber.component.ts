import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../../subscriber.service';
import { Router } from '@angular/router';
import { Subscriber } from '../../../models/subscriber';

@Component({
  selector: 'app-create-subscriber',
  templateUrl: './create-subscriber.component.html',
  styleUrls: ['./create-subscriber.component.css']
})
export class CreateSubscriberComponent implements OnInit {


subscriber: Subscriber = new Subscriber();
  constructor(private subscriberService: SubscriberService, private router: Router) { 
  }
  
  
  ngOnInit(): void {
  }
   

 saveSubscriber(){
  this.subscriberService.createSubscriber(this.subscriber).subscribe(data => {
    console.log(data);
    this.goToSubscriberList();
  });
 }

 goToSubscriberList(){
  this.router.navigate(['/librarian-list']);
 }

 
 onSubmit(){
  console.log(this.subscriber);
  this.saveSubscriber();
}

}
