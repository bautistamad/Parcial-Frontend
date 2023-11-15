import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITemas } from '../../api/models/i-temas';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipos } from '../../api/models/i-tipos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form!: FormGroup;
  temas: ITemas[] = [];
  tipos: ITipos[] = [];


  constructor(private _fb: FormBuilder,
    // private _personaService: PersonaResourceService,
    private _route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.listarDatosResolver();
    this.initForm();
  }

  private initForm(): void {
    this.form = this._fb.group({
      tiposServicios: [this.tipos],
    })
  }

  reset(): void {
    // this.submitted = false;
    this.initForm();
  }

  cancelar(): void {
    this.reset();
  }


  listarDatosResolver(): void {
    let tipo: ITipos = {
      codTipoServicio: "XX",
      tipoServicio: "Selecciona un tipo de servicio"
    }
    this.tipos.push(tipo)
    console.log(tipo.codTipoServicio)
    this._route.data.subscribe((data) => {
      this.tipos.push(...data["tipos"])
    })
  }
}
