import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITemas } from '../../api/models/i-temas';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipos } from '../../api/models/i-tipos';
import { TemasResourceService } from '../../api/resources/temas-resource.service';

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
    private _temasService: TemasResourceService,
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
      temas: [''],
      sugerencia: ['']
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
      tipoServicio: $localize`Selecciona un tipo de servicio`
    }
    this.tipos.push(tipo)
    console.log(tipo.codTipoServicio)
    this._route.data.subscribe((data) => {
      this.tipos.push(...data["tipos"])
    })
  }

  onChange(value: any) { 
    let codTipoServicio: string = value.target.value;
    
    this.temas = [];
    this.reset();

    if (codTipoServicio === 'XX') {
      return;
    }

    this._temasService.getTemas({codTipoServicio: codTipoServicio }).subscribe ({
      next: ( temas: ITemas[] ) => {

        let tema: ITemas = {
          codTipoServicio: codTipoServicio,
          tema: $localize`Seleccione un tema`,
          nroTema: "00"
        }

        this.temas.push(tema);
        this.temas.push(...temas);
        this.form.patchValue({temas: this.temas})

      },
      error: ( err ) => {
        throw err;
      }
    })
  }
}
