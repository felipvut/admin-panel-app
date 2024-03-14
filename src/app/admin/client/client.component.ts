import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
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
export class ClientComponent implements OnInit {
  model: any = {}
  constructor(
    private fb: NonNullableFormBuilder,
    protected service: ClientsService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    ) {
    this.validateForm;
  }

  ngOnInit(): void {
    this.model.id = this.activatedRoute.snapshot.paramMap.get("id")
    if(this.model.id) {
      this.get()
    }
  }
  
  validateForm: FormGroup<{
    name: FormControl<string>;
    cpf: FormControl<string>;
    phone: FormControl<string>;
    due_date: FormControl<string>;
    userName: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    due_date: ['', [Validators.required]],
    phone: ''
  });

  async get() {
    this.model = ((await this.service.get(this.model.id)).data).data
  }

  async save() {
    const savedModel = ((await this.service.save(this.model)).data).data
    this.model.id = savedModel.raw[0].id
    this.router.navigate(['/clients/' + this.model.id])
  }
}
