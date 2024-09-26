import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-alarms',
  templateUrl: './my-alarms.component.html',
  styleUrls: ['./my-alarms.component.scss'],
})
export class MyAlarmsComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
    // Limpiar las subscripciones anteriores si es necesario
    this.clearSubscriptions();

    // Ejemplo de nueva subscripción que agregamos al array
    const newSub = this.myObservable.subscribe(data => {
      console.log(data);
    });
    this.subscriptions.push(newSub);
  }

  ngOnDestroy() {
    // Limpiar las subscripciones cuando el componente se destruye
    this.clearSubscriptions();
  }

  private clearSubscriptions() {
    // Desuscribirse de todas las subscripciones activas
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  get myObservable() {
    // Ejemplo de observable
    return new Observable(observer => {
      observer.next('Dato de ejemplo');
      observer.complete();
    });
  }
}
