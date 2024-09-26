import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-edit-alarm',
  templateUrl: './edit-alarm.component.html',
  styleUrls: ['./edit-alarm.component.scss'],
})
export class EditAlarmComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  customTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#fff',
      buttonColor: '#36618e',
    },
    dial: {
      dialBackgroundColor: '#36618e',
      dialEditableBackgroundColor: '#fff',
      dialActiveColor: '#fff',
      dialEditableActiveColor: '#36618e'
    },
    clockFace: {
      clockFaceBackgroundColor: '#f0f0f0',
      clockHandColor: '#36618e',
      clockFaceTimeActiveColor: '#fff',
      clockFaceTimeInactiveColor: '#6c6c6c'
    }
  };

}
