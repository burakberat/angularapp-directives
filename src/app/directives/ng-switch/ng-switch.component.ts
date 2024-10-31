import { Component } from '@angular/core';
import { Products, Type } from '../../models/products';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
product:Products;
constructor(){
  this.product = new Products(1, "Kalem1", Type.Small)
}
}
