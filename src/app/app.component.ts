import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgforComponent } from "./directives/ngfor/ngfor.component";
import { NgIfComponent } from "./directives/ng-if/ng-if.component";
import { NgSwitchComponent } from "./directives/ng-switch/ng-switch.component";
import { NgClassComponent } from "./directives/ng-class/ng-class.component";
import { NgStyleComponent } from "./directives/ng-style/ng-style.component";
import { NgModelComponent } from "./directives/ng-model/ng-model.component";
import { CustomDirective } from './directives/custom.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgforComponent, NgIfComponent, NgSwitchComponent, NgClassComponent, NgStyleComponent, NgModelComponent, CustomDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp-directives';
  //publish check-in
}
