import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXpWe6SY5ZOS-mqaaDYKXalotc2dHwL7W2Q&usqp=CAU"
  contentTitle: string = "NOVA FASE DA MARVEL SERÁ MELHOR QUE A PRIMEIRA ?"
  contentDescription: string = "Marvel anuncia o inicio da fase 2 do UCM"

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      console.log(value.get("id"))
    )
  }

}
