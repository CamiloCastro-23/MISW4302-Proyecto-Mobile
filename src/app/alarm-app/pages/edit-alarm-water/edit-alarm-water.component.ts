import { Component, OnInit } from '@angular/core';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-edit-alarm-water',
  templateUrl: './edit-alarm-water.component.html',
  styleUrls: ['./edit-alarm-water.component.scss'],
})
export class EditAlarmWaterComponent  implements OnInit {

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
