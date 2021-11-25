import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selecteur-bateau',
  templateUrl: './selecteur-bateau.component.html',
  styleUrls: ['./selecteur-bateau.component.scss']
})

export class SelecteurBateauComponent implements OnInit {

  private minString = 3;
  private maxString = 40;

  public listebateau:any;

  rechercheDeBateau = "https://iwa2021.edriki.com/api/Boat/Search/fee";

  constructor(
    private http: HttpClient) {}

  rechercher(event:any){
    var term = event.target.value;

    if(term.lenght >= this.minString && term.lenght <= this.maxString){
      console.log(event.target.value);
      this.http.get<any>(this.rechercheDeBateau+term).subscribe(
      respond => {
      console.log(respond);
      var liste = new Array;
      respond.response.datas.forEach(function(value:any){
        var obj = {"ref":value.ref,"name":value.name};
        liste.push(obj);
      });
    })
    }
    
  }

  ngOnInit(): void {
  }

}
