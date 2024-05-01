import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { ActivatedRoute, Router } from "@angular/router";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { ServiceOrdersService } from "../../services/service-orders.service";
import { NzMessageModule, NzMessageService } from "ng-zorro-antd/message";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { WorkersService } from "../../services/workers.service";
import { ClientsService } from "../../services/clients.service";

@Component({
  selector: "app-service-order",
  standalone: true,
  imports: [
    NzGridModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzSpinModule,
    NzMessageModule,
    NzSelectModule
  ],
  templateUrl: "./service-order.component.html",
  styleUrl: "./service-order.component.scss",
})
export class ServiceOrderComponent {
  token: any = ''
  isSpinning: boolean = false;
  model: any = {};
  constructor(
    private fb: NonNullableFormBuilder,
    protected service: ServiceOrdersService,
    protected workersService: WorkersService,
    protected clientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService
  ) {
    this.validateForm;
  }
  workers: any[] = []
  clients: any[] = []

  ngOnInit(): void {
    this.token = localStorage.getItem('infinity-token')
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id != "novo") {
      this.model.id = id;
      this.get()
    }
    this.getWorkers()
    this.getClients()
  }

  validateForm: FormGroup<{
    name: FormControl<string>;
    start_date: FormControl<string>;
    workers_id: FormControl<string>;
    clients_id: FormControl<string>;
    description: FormControl<string>;
  }> = this.fb.group({
    name: ["", [Validators.required]],
    start_date: ["", [Validators.required]],
    workers_id: ["", [Validators.required]],
    clients_id: ["", [Validators.required]],
    description: ["", [Validators.required]],
  });

  get() {
    this.isSpinning = true;
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

  getWorkers() {
    this.isSpinning = true
    this.workersService.list().subscribe({ next:
      result => {
        this.workers = result.data
        this.isSpinning = false
      }, error: 
      err => {
        this.isSpinning = false
      }
    },
    )
  }

  getClients() {
    this.isSpinning = true
    this.clientsService.list().subscribe({ next: 
      result => {
        this.clients = result.data
        this.isSpinning = false
      }, error: 
      err => {
        this.isSpinning = false
      }
    })
  }

  save() {
    this.isSpinning = true;
    this.service.save(this.model, this.token).subscribe({ next: 
      result => {
        const savedModel = result.data
        this.isSpinning = false
        this.message.info("Registo salvo com sucesso!")
        if(savedModel?.raw[0]?.id) {
          this.model.id = savedModel?.raw[0]?.id;
        }
        this.router.navigate(['/service_orders/' + this.model.id])
        this.get()
      }, error:
      err => {
        console.log(err)
        this.message.error("Erro ao salvar registro!")
        this.isSpinning = false
      }
    })
  }

  delete() {
    this.isSpinning = true;
    this.service.delete(this.model, this.token).subscribe({ next:
      result => {
        this.isSpinning = false
        this.message.info("Registro apagado com sucesso!")
        if(result.success == true) {
          this.router.navigate(['/service_orders'])
        }
      }, error:
      err => {
        this.message.error("Erro ao apagar registro!")
        this.isSpinning = false
      }
    })
  }
}
