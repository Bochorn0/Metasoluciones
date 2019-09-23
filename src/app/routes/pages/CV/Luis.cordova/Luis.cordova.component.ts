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
    Titulos: ['Javascript', 'PHP', 'Nodejs', 'HTML y CSS', 'Mysql', 'Angular', 'SQLServer', 'SCRUM', 'Microsoft Team Foundation', 'Mongodb'],
    Datos: [
      {
        label: 'Años Experiencia',
        data: [6, 6, 3, 8, 8, 3, 2, 2, 2, 2]
      }, {
        label: 'Dominio',
        data: [8, 8, 9, 10, 9, 8, 8, 8, 7, 3]
      }, {
        label: 'Desarrollos Profesionales',
        data: [7, 10, 10, 10, 9, 7, 5, 5, 2, 1]
      }
    ],
    Colors: [
      {
        backgroundColor: 'rgba(114,102,186,0.2)',
        borderColor: 'rgba(114,102,186,1)',
        pointColor: 'rgba(114,102,186,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(114,102,186,1)'
      }, {
        backgroundColor: 'rgba(151,187,205,0.2)',
        borderColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(151,187,205,1)'
      }, {
        backgroundColor: ' rgba(68, 175, 255, 0.5)',
        borderColor: '#0195c3',
        pointColor: '#23b7e5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(151,187,205,1)'
      }, {
        backgroundColor: 'rgba(224, 38, 30, 0.8)',
        borderColor: '#c00',
        pointColor: '#c00',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(151,187,205,1)'
      }]
  };

  constructor(public colors: ColorsService) { }

  ngOnInit() { }

}
