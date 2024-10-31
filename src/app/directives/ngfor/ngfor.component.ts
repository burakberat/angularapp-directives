import { NgFor } from '@angular/common';
import {Component} from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
names:string[]=["Ahmet","Mehmet","Hasan"]
userList:User[]=[]

constructor() { 
  this.userList.push(new User(1,"ahmet1","ahmet1@outlook.com"));
  this.userList.push(new User(2,"ahmet2","ahmet2@outlook.com"));
  this.userList.push(new User(3,"ahmet3","ahmet3@outlook.com"));
}
}
