import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILesson} from '../lesson.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  form: FormGroup;
  @Output() isConfirmed: EventEmitter<any> = new EventEmitter<any>();
  @Output() newLesson: EventEmitter<ILesson> = new EventEmitter<ILesson>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formData();
  }

  formData() {
    this.form = this.fb.group({
      topic: this.fb.control(null, Validators.required),
      date: this.fb.control(null, Validators.required),
      lecturer: this.fb.control(null, Validators.required)
    });
  }

  addLesson() {
    this.newLesson.emit(this.form.value);
    this.isConfirmed.emit();
  }

  closeDialog() {
    this.isConfirmed.emit();
  }
}

