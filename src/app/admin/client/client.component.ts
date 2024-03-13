import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    NzGridModule, NzInputModule,
    FormsModule, ReactiveFormsModule, 
    NzDatePickerModule, NzButtonModule,
    NzPopconfirmModule
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  model: any = {}
  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm;
  }
  
  validateForm: FormGroup<{
    name: FormControl<string>;
    cpf: FormControl<string>;
    telefone: FormControl<string>;
    due_date: FormControl<string>;
    userName: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    due_date: ['', [Validators.required]],
    telefone: ''
  });
}
