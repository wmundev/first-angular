import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  // TODO, get items from database
  items =
    [{
      title: 'ice cream',
      subtitle: 'delicious',
      price: '$1'
    },
      {
        title: 'burger',
        subtitle: 'very nice for lunch',
        price: '$5'
      },
      {
        title: 'chicken wings',
        subtitle: 'delicacy',
        price: '$10'
      },
      {
        title: 'fish and chips',
        subtitle: 'expensive',
        price: '$15'
      },
    ];


  constructor() {
    console.log('initialise store');
  }

  ngOnInit() {
  }

}
