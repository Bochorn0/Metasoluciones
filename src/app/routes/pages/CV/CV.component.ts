import { Component, OnInit } from '@angular/core';
//import { SettingsService } from '../../../core/settings/settings.service';
import { ColorsService } from '../../../shared/colors/colors.service';

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
    Habilidades : ['Manejo de personal', 'Desarrollo independiente', 'Contabilidad y reglamentación fiscal', ],
    Estatus: [
      {"Diseño": 85, "Back End": 80 , Contabilidad: 80, "Front End": 85, "Manejo de Personal": 80, "Mantenimiento de servidores Rutinas y Configuración": 80 , "Soporte de equipo, Redes , instalaciones ": 80}
    ],
    "Experiencia Profesional": ['UNISON - Ingeniería en Sistemas de la información 2009-2014', 'EGEL - Ingenieria de Software 2014', 'Km Solucion Consultoria 2014 - 2014 ', 'CT Internacional del Noroeste 2014 - 2019', 'Campestre el Retiro - Consultor y Desarrollador - 2018-2019', 'Meta Soluciones - CEO y Fundador - Consultoria Especializada y soluciones en TI - 2019 '],
    "Cursos y Extras" : ['Curso de ventas Agencia Leon Mayoral - 2014', 'Curso de Redes Reunion CUDI Ensenada, Routeo y conexiones de red 2013', 'Laravel Principios de arquitectura - ' ],
    Referencias: ['Ing Heriberto Aja Leyva - CEO de KM Solución - (662)189-3701 ',
    'Roberto Navarro Bartolini - Director de TI en CT Internacional del Noroeste',
    'Francisco Manuel Duarte Medrano - Director General en Campestre El Retiro'],
    "Libros e Inspiraciones":["Desata tu Éxito - Victor Martín Pérez", "El Inversor Inteligente -  Benjamin Graham", "Liderago Conciente - Daniel Gabarró", "La Regla de Oro de Los Negocios - Grant Cardone", "La Vetaja del ganador -  Robert T. Kiyosaki" ],
    "Lenguajes": [{NodeJs: 80, "CSS, HTML, Javascript":80, PHP: 85, Java : 20 , "C#": 30, "Angular": 70, }]
  }

  radar = {
    Titulos: ['Javascript', 'PHP', 'Nodejs', 'SQLServer','Mysql','Mongodb', 'Angular', 'C# ', 'HTML y CSS','Microsoft Team Foundation','SCRUM', 'Agile Programming'],
    Datos: [
        {
            label: 'Años Experiencia',
            data: [5, 6, 3, 2, 8, 2, 3, 1, 8, 2, 2, .5]
        }, {
            label: 'Dominio',
            data: [7, 8, 9, 6, 9, 3, 7, 2, 10, 6, 8, 1]
          }, {
            label: 'Desarrollos Profesionales',
            data: [4, 10, 10, 4, 9, 0, 4, 0, 10, 2, 5, 0]
          }, {
            label: 'Cursos o capacitaciones',
            data: [2, 4, 2, 1, 0, 1, 1, 0, 4, 2, 3, 1]
          }, {
            label: 'Preferencia',
            data: [7, 8, 10, 8, 7, 4, 10, 5, 7, 8, 8, 4]
          }
      ],
      Colors:[
        {
          backgroundColor: 'rgba(15, 151, 0, 0.4)',
          borderColor: '#0c0',
          pointColor: '#0c0',
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
        },{
          backgroundColor: 'rgba(114,102,186,0.2)',
          borderColor: 'rgba(114,102,186,1)',
          pointColor: 'rgba(114,102,186,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(114,102,186,1)'


      }]
};

    pieData = {
      labels: [
          'Purple',
          'Yellow',
          'Info'
      ],
      datasets: [{
          data: [30, 40, 30]
      }]
  };

  pieColors = [{
      borderColor: [
          this.colors.byName('info'),
          this.colors.byName('yellow'),
          this.colors.byName('purple')
      ],
      backgroundColor: [
          this.colors.byName('info'),
          this.colors.byName('yellow'),
          this.colors.byName('purple')
      ],
  }];

  pieOptions = {
      responsive: true
  };


  //DISENIO
  donaDesign = { labels: [ '','' ], Datos: [{ data: [85,15 ] }],Colors: [{
    borderColor: [ this.colors.byName('danger'), this.colors.byName('gray'), ],
    backgroundColor: [ this.colors.byName('danger'), this.colors.byName('gray'), ] 
  }] };
  //BACKEND
  donaBackend = { labels: [ '','' ], Datos: [{ data: [80,20 ] }],Colors: [{
    borderColor: [ this.colors.byName('pink'), this.colors.byName('gray'), ],
    backgroundColor: [ this.colors.byName('pink'), this.colors.byName('gray'), ] 
  }] };
  //FRONTEND
  donaFrontend = { labels: [ '','' ], Datos: [{ data: [85,15 ] }],Colors: [{
    borderColor: [ this.colors.byName('purple'), this.colors.byName('gray'), ],
    backgroundColor: [ this.colors.byName('purple'), this.colors.byName('gray'), ] 
  }] };
  //MANEJO PERSONAL
  donaPersonal = { labels: [ '','' ], Datos: [{ data: [70,30 ] }],Colors: [{
    borderColor: [ this.colors.byName('info'), this.colors.byName('gray'), ],
    backgroundColor: [ this.colors.byName('info'), this.colors.byName('gray'), ] 
  }] };
  //SERVIDORES
  donaServidores = { labels: [ '','' ], Datos: [{ data: [75,25 ] }],Colors: [{
    borderColor: [ this.colors.byName('green'), this.colors.byName('gray'), ],
    backgroundColor: [ this.colors.byName('green'), this.colors.byName('gray'), ] 
  }] };
  //SOPORTE Y REDES
  donaSoporte = { labels: [ '','' ], Datos: [{ data: [85,15 ] }],Colors: [{
    borderColor: [ this.colors.byName('primary'), this.colors.byName('gray'), ],
    backgroundColor: [ this.colors.byName('primary'), this.colors.byName('gray'), ] 
  }] };

  constructor(public colors: ColorsService) { }

  ngOnInit() { }

}
