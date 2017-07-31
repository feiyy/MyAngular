import{ Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import {Hero} from './hero';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Mobile } from './subject/subject.component';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {

  constructor(private http:Http, private jsonp:Jsonp) {}
  
/*  getHeroes():Observable<Hero[]>
  {
  	 return this.http.get("http://localhost:4200/assets/mockdata/heroes.json").map((res)=>res.json());
  }
  */
 
 getHeroes():Promise<Hero[]>
 {
 	  return this.http.get("api/heroes").toPromise().then(res=>res.json().data);
 }
 
 getHeroById(id:number):Promise<Hero>
 {
 	   return this.http.get(`api/heroes/${id}`).toPromise().then(res=>res.json().data);
 }
 
 addHero(heroname:string):Promise<void>
 {
 	  return this.http.post("api/heroes", JSON.stringify({name:heroname})).toPromise().then(()=>null);
 }
 
 delete(id:number):Promise<void>
 {
 	  return this.http.delete(`api/heroes/${id}`).toPromise().catch((err)=>{console.log(err)});
 }
 
/* update(hero:Hero):Promise<void>
 {
 	  returen this.http.put("api/heroes", JSON.stringify(hero)).toPromise().then(()=>null);
 }*/
 
 
 getMobileInfo(mobile:string):Observable<Mobile>
 {
  	return this.jsonp.get(`https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=${mobile}&callback=JSONP_CALLBACK`).map((res)=>res.json());
 }
  
  /*getHeroById(id:number):Observable<Hero>
  {
  	 return this.getHeroes().map((heros)=>{return heros.find((h)=>{h.id == id})});
  }*/

}
