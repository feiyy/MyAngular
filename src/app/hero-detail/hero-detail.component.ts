import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	
	@Input() selectedHero:Hero;

  constructor( private router: Router) { }

  ngOnInit() {
  }
  
  goedithero(id:number)
  {
  	 this.router.navigate(['/heroes/heroedit', id]);
  }

}
