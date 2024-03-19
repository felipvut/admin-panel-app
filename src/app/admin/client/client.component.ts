import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    NzGridModule, NzInputModule,
    FormsModule, ReactiveFormsModule, 
    NzDatePickerModule, NzButtonModule,
    NzPopconfirmModule, NzSpinModule
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {
  isSpinning: boolean = false
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
    let id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id != 'novo') {
      this.model.id = id
      this.get()
    }
  }
  
  validateForm: FormGroup<{
    name: FormControl<string>;
    cpf: FormControl<string>;
    phone: FormControl<string>;
    due_date: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    due_date: ['', [Validators.required]],
    phone: ''
  });

  async get() {
    this.isSpinning = true
    this.model = ((await this.service.get(this.model.id)).data).data
    this.isSpinning = false
  }

  async save() {
    this.isSpinning = true
    const savedModel = ((await this.service.save(this.model)).data).data
    this.isSpinning = false
    this.model.id = savedModel.raw[0].id
    this.router.navigate(['/clients/' + this.model.id])
    this.get()
  }

  async delete() {
    this.isSpinning = true
    const deleted = ((await this.service.delete(this.model)).data)
    this.isSpinning = false
    if(deleted.success == true) {
      this.router.navigate(['/clients'])
    }
  }
}
