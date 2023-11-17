import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITemas } from '../../api/models/i-temas';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipos } from '../../api/models/i-tipos';
import { TemasResourceService } from '../../api/resources/temas-resource.service';
import { SugerenciasResourceService } from '../../api/resources/sugerencias-resource.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form!: FormGroup;
  temas: ITemas[] = [];
  tipos: ITipos[] = [];
  submitted: boolean = false;
  mostrarOtros: boolean = false;


  constructor(private _fb: FormBuilder,
    private _temasService: TemasResourceService,
    private _sugService: SugerenciasResourceService,
    private _route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.listarDatosResolver();
    this.initForm();
  }

  private initForm(): void {
    this.form = this._fb.group({
      codTipoServicio: new FormControl('XX',[Validators.required]),
      numeroTema: new FormControl('00',[Validators.required]),
      sugerencia: new FormControl('',[Validators.required]),
      identificacion: new FormControl('Si', [Validators.required]),
      email: new FormControl({ value: '', disabled: false}, [Validators.email, Validators.required]),
      tema: new FormControl({ value: '', disabled: true}, [Validators.required])

    })
    this.escucharCambios();
  }

  private vaciarForm(): void {
    this.form.patchValue({
      numeroTema: new FormControl('',[Validators.required]),
      sugerencia: new FormControl('',[Validators.required])
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

    if (codTipoServicio === 'XX') {
      this.vaciarForm();
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
        this.form.patchValue({numeroTema: tema.nroTema})

      },
      error: ( err ) => {
        throw err;
      }
    })
  }


  escucharCambios(): void {
    this.form.controls['identificacion'].valueChanges.subscribe(valor => {
      if (valor  == 'No') {
        this.form.controls['email'].disable();
        this.form.controls['email'].reset();
      } else {
        this.form.controls['email'].enable();
      }
    });
    this.form.controls['numeroTema'].valueChanges.subscribe(valor => {
      this.mostrarOtros = valor === '0';
      if (valor == '0' ){
        this.form.controls['tema'].enable();
      } else {
        this.form.controls['tema'].disable();
      }
    })
  }


  insSuggestion(): void {
    console.log("INGRESE A SUGERENCIA")
    this.submitted = true;
    if (this.form.valid) {
      this._sugService.put(this.form.value).subscribe({
        next: () => {
          console.log("Insercion exitosa");
          this.router.navigate(['/main/success']);
        },
        error: (error) => {
          console.log(error)
          console.log("Insercion fallida");
        }
      })
    }

  }

  
}
