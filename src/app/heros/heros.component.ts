import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
	
	selectedHero:Hero;
	
	title:string = "Tour of Heroes";
	
	heroes:Hero[] = [];

  constructor(private heroService:HeroService  	
  ) { }

  ngOnInit() {
  	
  	//获得heroes
  	 this.heroService.getHeroes().then((heroes)=>this.heroes = heroes);
  }
  
  selecthero(hero:Hero):void
  {
  	 this.selectedHero = hero;
  }
  
  deletehero(hero:Hero):void
  {
  	 this.heroService.delete(hero.id).then(()=>{
  	 	
  	 	 console.log(hero.id);
  	 	
  	   this.heroes = this.heroes.filter((h)=>h.id!=hero.id);
  	 		 	
  	 })
  }

}

