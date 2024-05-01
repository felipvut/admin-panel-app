import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ClientsService } from '../../services/clients.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzGridModule, NzInputModule,
    FormsModule, ReactiveFormsModule, 
    NzDatePickerModule, NzButtonModule,
    NzPopconfirmModule, NzSpinModule,
    NzIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  passwordVisible = false;
  password?: string;

  obj: any = {}
  isSpinning: boolean = false
  constructor(
    private fb: NonNullableFormBuilder,
    protected service: BaseService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    ) {
    this.validateForm;
  }
  
  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login() {
    this.isSpinning = true
    this.service.login(this.obj).subscribe({ next:
      result => {
        const token = result.token
        localStorage.setItem('infinity-token', token)
        this.isSpinning = false
        this.router.navigate(['/clients'])
      }, error: 
      err => {
        this.isSpinning = false
      }
    })
  }
}
