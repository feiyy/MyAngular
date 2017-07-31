import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	
	products:Product[] = [{id:1,img:'Blue hills.jpg', count:1, price:20.22, selected:true},
	                      {id:2,img:'Sunset.jpg', count:1, price:30.33, selected:true},
	                      {id:3,img:'Water lilies.jpg', count:1, price:40.44, selected:true},
	                      {id:4,img:'Winter.jpg', count:1, price:50.55, selected:true}];

  constructor() { }

  ngOnInit() {
  }
  
  deduct(p:Product):void
  {
  	 if(p.count>1)
  	 {
  	 	  p.count--;
  	 }
  	 
  }
  
  add(p:Product):void
  {
  	 
  	 p.count++;
  	  	 
  }
  
  changestate($event:any,p:Product):void
  {
  	p.selected = $event.target.checked;
  }
  
  getsum()
  {
  	 let sum:number = 0;
  	 for(let p of this.products)
  	 {
  	 	  if(p.selected)
  	 	  {
  	 	  	 sum+= p.price * p.count;
  	 	  }
  	 }
  	 return sum.toFixed(2);
  }

}

export class Product
{
	 id:number;
	 img:string;
	 count:number;
	 price:number;
	 selected:boolean;
}
