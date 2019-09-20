import { Component, OnInit } from '@angular/core';
//import { SettingsService } from '../../../core/settings/settings.service';

@Component({
  selector: 'App-CV',
  templateUrl: './CV.component.html',
  styleUrls: ['./CV.component.scss']
})
export class CVComponent implements OnInit {
  detallesCurriculum = {
    Nombre: 'Luis Fernando Cordova Castillo',
    Edad: 28,
    Carrera: 'Ingeniería en Sistemas de la información',
    Acerca: 'Detalles sobre la persona',
    Habilidades : ['Manejo de personas', 'Desarrollo independiente', ''],
    Estatus: [
      {"Diseño": 85, "Back End": 80 , Contabilidad: 80, "Front End": 85, "Manejo de Equipo": 80, "Mantenimiento de servidores": 80, "Rutinas y Bash": 60}
    ],
    "Experiencia Profesional": ['UNISON - Ingeniería en Sistemas de la información 2009-2014', 'EGEL - Ingenieria de Software 2014 - Sobresaliente', 'Km Solucion Consultoria 2014 - 2014 ', 'CT Internacional del Noroeste 2014 - 2019', 'Campestre el Retiro - Consultor y Desarrollador - 2018-2019', 'Meta Soluciones - CEO y Fundador - Consultoria Especializada y soluciones en TI - 2019 '],
    "Cursos y Extras" : ['Curso de ventas Agencia Leon Mayoral - 2014', 'Curso de Redes Reunion CUDI Ensenada, Routeo y conexiones de red 2013', 'Laravel Principios de arquitectura - ' ],
    Referencias: ['Ing Heriberto Aja Leyva - CEO de KM Solución - (662)189-3701 ',
    'Roberto Navarro Bartolini - Director de TI en CT Internacional del Noroeste',
    'Francisco Manuel Duarte Medrano - Director General en Campestre El Retiro'],

  }
  constructor() { }

  ngOnInit() { }

}
