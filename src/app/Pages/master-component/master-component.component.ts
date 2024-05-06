import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-page',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>'
})

//Component Pai, Todos outros components são renderizados à partir do mesmo.
export class FramePageComponent {
  title = 'Task Managment';
}
