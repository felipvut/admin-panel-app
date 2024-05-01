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
import { NgxMaskDirective } from 'ngx-mask';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    NzGridModule, NzInputModule,
    FormsModule, ReactiveFormsModule, 
    NzDatePickerModule, NzButtonModule,
    NzPopconfirmModule, NzSpinModule,
    NgxMaskDirective, NzMessageModule,

  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {
  isSpinning: boolean = false
  model: any = {}
  token: any = ''
  constructor(
    private fb: NonNullableFormBuilder,
    protected service: ClientsService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private message: NzMessageService
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
  }> = this.fb.group({
    name: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    due_date: ['', [Validators.required]],
    phone: ''
  });

  get() {
    this.isSpinning = true
    this.service.get(this.model.id).subscribe({ next:
      result => {
      this.model = result.data
      this.isSpinning = false
    }, error:
      err => {
      this.isSpinning = false
      }
    })
  }

  async save() {
    try{
      this.isSpinning = true
      const savedModel = ((await this.service.save(this.model, this.token)).data).data
      this.isSpinning = false
      this.message.info("Registo salvo com sucesso!")
      if(savedModel?.raw[0]?.id) {
        this.model.id = savedModel?.raw[0]?.id;
      }
      this.router.navigate(['/clients/' + this.model.id])
      this.get()
    } catch(e) {
      console.log(e)
      this.message.error("Erro ao salvar registro!")
      this.isSpinning = false
    }
  }

  delete() {
    this.isSpinning = true
    this.service.delete(this.model, this.token).subscribe({ next:
      result => {
        this.isSpinning = false
        this.message.info("Registro apagado com sucesso!")
        if(result.success == true) {
          this.router.navigate(['/clients'])
        }
      }, error:
      err => {
        this.message.error("Erro ao apagar registro!")
        this.isSpinning = false
      }
    })
  }
}
