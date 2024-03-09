import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule,
    NzPageHeaderModule, NzBreadCrumbModule],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.scss'
})
export class WorkerComponent {

}
