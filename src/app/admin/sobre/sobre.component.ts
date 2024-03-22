import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    NzImageModule
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
