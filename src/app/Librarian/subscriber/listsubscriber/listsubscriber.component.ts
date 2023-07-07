import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../../models/subscriber';
import { SubscriberService } from '../../../subscriber.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listsubscriber',
  templateUrl: './listsubscriber.component.html',
  styleUrls: ['./listsubscriber.component.css']
})
export class ListsubscriberComponent implements OnInit{

  private _listSubscriber : Subscriber[] = [];
  searchQuery: string = '';


  get listSubscriber() : Subscriber[] {
    if(!this.searchQuery){
      return this._listSubscriber;
  }
  return this._listSubscriber.filter(subscriber => subscriber.firstname.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  constructor(private subscriberService : SubscriberService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAll();   
  }

  getAll() {
    this.subscriberService.getAllSubscriber().subscribe(data => {
      this._listSubscriber = data;
      console.log(data);
      
  })

}

updateSubscribers(id: number) {
    this.router.navigate(['/update-Subscriber', id]);
    }

    deleteSubscriber(id: number) {
      this.subscriberService.deleteSubscriber(id).subscribe(data => {
        console.log(data);
        this.getAll();
        
      })
    }

    subscriberDetail(id: number) {
      this.router.navigate(['/subscriber-detail', id]);
    }

    getCreate(){
  this.router.navigate(['/create-subscriber']);
     }

     getDashboard(){
      this.router.navigate(['/dashboard']);
     }


     logout(){
      this.router.navigate(['/login']);
     }

  }