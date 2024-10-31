import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.css'
})
export class NgModelComponent {
name:string = "Ahmet";
}
