import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ["Spiterman","Ironman","Hulk","She Hulk","Thor"];
  public lastHero?: string = "";

  removeLastHero():void{
    this.lastHero=this.heroNames.pop();
    console.log(this.lastHero);
  }

}
