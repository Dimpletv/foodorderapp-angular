import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // totalItemNumber:number = 0;

  constructor(private cart:CartService, http: HttpClient) { }

  ngOnInit(): void {
    // this.cart.getCart().subscribe(res=>{
    //   this.totalItemNumber = res.length;
    // })
  }

}
