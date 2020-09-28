import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaries:Diary[]=[

    new Diary(1,"Github","Deploying My work to github",new Date(2020,9,3)),
    new Diary(2,"Gym","Mate with my new gym instructor and did squats",new Date(2020,9,4)),
    new Diary(1,"Dinner","Dine with my best friend at the new restaurant their food was yummy",new Date(2020,9,5)),
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
