import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WorkersService } from '../../services/workers.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [
    NzGridModule, NzInputModule,
    FormsModule, NzDatePickerModule,
    NzButtonModule, NzPopconfirmModule,
    NzSpinModule, NgxMaskDirective
  ],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.scss'
})
export class WorkerComponent {
  
  token: any = ''
  isSpinning: boolean = false
  model: any = {}
  constructor(
    private fb: NonNullableFormBuilder,
    protected service: WorkersService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    ) {
    this.validateForm;
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('infinity-token')
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
    contract_end: FormControl<string>;
  }> = this.fb.group({
    contract_end: ['', [Validators.required]],
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    due_date: ['', [Validators.required]],
    phone: ''
  });

  async get() {
    try{
      this.isSpinning = true
      this.model = ((await this.service.get(this.model.id)).data).data
      this.isSpinning = false
    } catch(e) {
      console.log(e)
      this.isSpinning = false
    }
  }

  async save() {
    try{
      this.isSpinning = true
      const savedModel = ((await this.service.save(this.model, this.token)).data).data
      this.isSpinning = false
      this.model.id = savedModel.raw[0].id
      this.router.navigate(['/workers/' + this.model.id])
      this.get()
    } catch(e) {
      console.log(e)
      this.isSpinning = false
    }
  }

  async delete() {
    try{
      this.isSpinning = true
      const deleted = ((await this.service.delete(this.model, this.token)).data)
      this.isSpinning = false
      if(deleted.success == true) {
        this.router.navigate(['/workers'])
      }
    } catch(e) {
      console.log(e)
      this.isSpinning = false
    }
  }
}
