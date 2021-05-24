import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  
  private Nombre = 'Stiven';
  Apellido = 'Barahona';
  //Edad = 18;
  Empresa = 'Double v Partnerst';
  
  llamaEdad(value:String){
  }
  getNombre(){
    return this.Nombre
  }
  constructor() { }

  ngOnInit(): void {
  }

}
