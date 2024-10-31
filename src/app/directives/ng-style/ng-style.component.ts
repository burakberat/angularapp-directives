import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
number=3;
style:any = {'background-color':'red'}

}
