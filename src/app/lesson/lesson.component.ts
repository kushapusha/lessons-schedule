import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  isModalOpen = false;
  lessons = [
    {
      topic: 'OOP',
      date: '10/12/2019',
      lecturer: 'Mr X'
    },
    {
      topic: 'Array Methods',
      date: '05/01/2020',
      lecturer: 'Mr XX'
    },
    {
      topic: 'Closures',
      date: '10/01/2020',
      lecturer: 'Mr XXX'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
