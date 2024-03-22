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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService
  ) {
    this.validateForm;
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('infinity-token')
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id != "novo") {
      this.model.id = id;
      this.get();
    }
  }

  validateForm: FormGroup<{
    name: FormControl<string>;
    start_date: FormControl<string>;
    end_date: FormControl<string>;
    description: FormControl<string>;
  }> = this.fb.group({
    name: ["", [Validators.required]],
    start_date: ["", [Validators.required]],
    end_date: ["", [Validators.required]],
    description: ["", [Validators.required]],
  });

  async get() {
    try {
      this.isSpinning = true;
      this.model = (await this.service.get(this.model.id)).data.data;
      this.isSpinning = false;
    } catch (e) {
      this.isSpinning = false;
      console.log(e);
    }
  }

  async save() {
    try {
      this.isSpinning = true;
      const savedModel = (await this.service.save(this.model, this.token)).data.data;
      this.isSpinning = false;
      this.message.info("Registro salvo com sucesso!")
      if(savedModel?.raw[0]?.id) {
        this.model.id = savedModel?.raw[0]?.id;
      }
      this.router.navigate(["/service_orders/" + this.model.id]);
      this.get();
    } catch (e) {
      this.isSpinning = false;
      console.log(e);
      this.message.error("Erro ao salvar registro!")
    }
  }

  async delete() {
    try {
      this.isSpinning = true;
      const deleted = (await this.service.delete(this.model, this.token)).data;
      this.isSpinning = false;
      this.message.info("Registro apagado com sucesso!")
      if (deleted.success == true) {
        this.router.navigate(["/service_orders"]);
      }
    } catch (e) {
      this.isSpinning = false;
      console.log(e);
      this.message.error("Erro ao apagar registro!")
    }
  }
}
