import { Component, OnInit } from '@angular/core';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
	
	cellinfo:Mobile;
	
	//定一个Observable对象	
	observable = new Subject();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	
  	this.observable.debounceTime(300).subscribe((str)=>{console.log(str)});
  }

  senddata(str:string):void
  {
  	 //发送变化
  	 this.observable.next(str);
  }
  
  getmobileinfo(str:string):void
  {
  	 this.heroService.getMobileInfo(str).subscribe((res)=>this.cellinfo=res);
  }
  
}

export class Mobile
{
	 province:string;
	 catName:string;
}
