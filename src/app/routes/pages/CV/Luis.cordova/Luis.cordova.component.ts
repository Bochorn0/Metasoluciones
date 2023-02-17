import { Component, OnInit } from '@angular/core';
//import { SettingsService } from '../../../core/settings/settings.service';
import { ColorsService } from '../../../../shared/colors/colors.service';

@Component({
  selector: 'App-Luis-Cordova',
  templateUrl: './Luis.cordova.component.html',
  styleUrls: ['./Luis.cordova.component.scss']
})
export class LuisCordovaComponent implements OnInit {
/*  detallesCurriculum = {
    Nombre: 'Luis Fernando Cordova Castillo',
    Edad: 28,
    Carrera: 'Ingeniería en Sistemas de la información',
    Acerca: 'Detalles sobre la persona',
    Habilidades: ['Manejo de personal', 'Desarrollo independiente', 'Contabilidad y reglamentación fiscal',],
    Estatus: [
      { "Diseño": 85, "Back End": 80, Contabilidad: 80, "Front End": 85, "Manejo de Personal": 80, "Mantenimiento de servidores Rutinas y Configuración": 80, "Soporte de equipo, Redes , instalaciones ": 80 }
    ],
    "Experiencia Profesional": ['UNISON - Ingeniería en Sistemas de la información 2009-2014', 'EGEL - Ingenieria de Software 2014', 'Km Solucion Consultoria 2014 - 2014 ', 'CT Internacional del Noroeste 2014 - 2019', 'Campestre el Retiro - Consultor y Desarrollador - 2018-2019', 'Meta Soluciones - CEO y Fundador - Consultoria Especializada y soluciones en TI - 2019 '],
    "Cursos y Extras": ['Curso de ventas Agencia Leon Mayoral - 2014', 'Curso de Redes Reunion CUDI Ensenada, Routeo y conexiones de red 2013', 'Laravel Principios de arquitectura - '],
    Referencias: ['Ing Heriberto Aja Leyva - CEO de KM Solución - (662)189-3701 ',
      'Roberto Navarro Bartolini - Director de TI en CT Internacional del Noroeste',
      'Francisco Manuel Duarte Medrano - Director General en Campestre El Retiro'],
    "Libros e Inspiraciones": ["Desata tu Éxito - Victor Martín Pérez", "El Inversor Inteligente -  Benjamin Graham", "Liderago Conciente - Daniel Gabarró", "La Regla de Oro de Los Negocios - Grant Cardone", "La Vetaja del ganador -  Robert T. Kiyosaki"],
    "Lenguajes": [{ NodeJs: 80, "CSS, HTML, Javascript": 80, PHP: 85, Java: 20, "C#": 30, "Angular": 70, }]
  }*/

  radar = {
    Titulos: ['(0 - 10)','FrontEnd DEV (HTML5, Angular, React, Javascript)', 'BackEnd DEV (Nodejs, PHP)','SCRUM (Microsoft TFS, Jira, Assana)', 'UI Tools ( Figma, API documentation, Sitemaps)', 'DB Management (SQLServer, Mysql, MongoDB, ORM)'],
    Datos: [
      {
        label: 'Experience Years ',
        data: [7,8, 7, 7, 6, 8]
      }, {
        label: 'Domain',
        data: [10,9, 10, 8, 8, 9]
      }, {
        label: 'App implementation',
        data: [10,9, 10, 6, 6, 9]
      },
       {
        label: 'Project maintenance EXP',
        data: [2,7, 8, 7, 8, 9]
      },
    ]
  };

  constructor(public colors: ColorsService) { }

  ngOnInit() { }

}
