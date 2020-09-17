import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {ILesson} from '../lesson.interface';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  editForm: FormGroup;
  isModalOpen = false;
  isEditMode = false;
  lessonIndex: number;
  lessons: ILesson[] = [
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
  ];

  constructor() {
  }

  ngOnInit() {
    this.editForm = new FormGroup({});
  }

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addNewLesson(lesson: ILesson) {
    this.lessons.push(lesson);
  }

  showEditMode(lesson: ILesson) {
    this.lessonIndex = this.lessons.findIndex(lessonInfo => lesson.topic === lessonInfo.topic);
    this.isEditMode = true;

    this.editForm = new FormGroup({
      topic: new FormControl(lesson.topic),
      date: new FormControl(lesson.date),
      lecturer: new FormControl(lesson.lecturer)
    });
  }

  editLesson(i: number) {
    if (this.editForm.value.topic || this.editForm.value.date || this.editForm.value.lecturer) {
      this.lessons[i].topic = this.editForm.value.topic;
      this.lessons[i].date = this.editForm.value.date;
      this.lessons[i].lecturer = this.editForm.value.lecturer;
    }

    this.isEditMode = false;
  }

  deleteLesson(i: number) {
    this.lessons.splice(i, 1);
  }

  cancel() {
    this.isEditMode = false;
  }

}
