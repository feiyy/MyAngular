import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroedit',
  templateUrl: './heroedit.component.html',
  styleUrls: ['./heroedit.component.css']
})
export class HeroeditComponent implements OnInit {
	
	hero: Hero;

  constructor(private route:ActivatedRoute, private heroService: HeroService) {}

  ngOnInit() {
  	
  	//获得路由参数
  	//console.log(this.route.snapshot.queryParams["id"]);
  	
  	this.route.params.subscribe((params:Params)=>{
  		 		
  		this.heroService.getHeroById(params['id']).then((hero)=>this.hero = hero);
  		  	
  	});
  	
  }

}
