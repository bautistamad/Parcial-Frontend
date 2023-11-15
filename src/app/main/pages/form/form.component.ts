import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ITemas } from '../../api/models/i-temas';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipos } from '../../api/models/i-tipos';
import { TemasResourceService } from '../../api/resources/temas-resource.service';
import { SugerenciasResourceService } from '../../api/resources/sugerencias-resource.service';
import { ISugerencia } from '../../api/models/i-sugerencia';

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
      codTipoServicio: new FormControl('',[Validators.required]),
      numeroTema: new FormControl('',[Validators.required]),
      sugerencia: new FormControl('',[Validators.required])
    })
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

  insSuggestion(): void {
    console.log(" Inserte una sugerencia ")

    // Arreglar para que verifique los datos

    // this.submitted = true;
    // if (this.form.valid) {
    //   // this.pageAdded.emit(this.form.value);
    //   console.log(this.form.value);
    //   this.reset();
    // }

    // POST

    this.submitted = true;
    //console.log("form ",JSON.stringify(this.form.value));
    // const { formData } = this.form.value;

    // let sugerencia: ISugerencia = {
    //   codTipoServicio: this.form.value['tipoServicio'],
    //   numeroTema:this.form.value['temas'],
    //   sugerencia: this.form.value['sugerencia']
    // }
    // console.log("sugerencia" + JSON.stringify(sugerencia))
    if (this.form.valid) {
      this._sugService.put(this.form.value).subscribe({
        next: () => {
          console.log("Insercion exitosa");
          // this.router.navigate(['']);
        },
        error: (error) => {
          console.log(error)
          console.log("Insercion fallida");
        }
      })
    }

  }
}
