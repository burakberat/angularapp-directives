import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
isShow = true;

showHide():void{
  this.isShow = !this.isShow;
}
}
