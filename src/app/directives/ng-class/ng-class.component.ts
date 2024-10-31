import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  isLarge=true;
  isRedBox=true;
  isBorder=true;
  css:any={large:true,redBox:true,blueBorder:true}
  applyCss(){
    this.isLarge = !this.isLarge;
    this.isRedBox = !this.isRedBox;
    this.isBorder = !this.isBorder;
  }
}
