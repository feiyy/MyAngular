import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.css']
})
export class AddheroComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  ngOnInit() {
  }
  
  addhero(heroname:string)
  {
  	 this.heroService.addHero(heroname).then(()=>{ alert("add success");});
  	 
  	
  }

}
