import { NgModule } from '@angular/core';
import { EquipoComponent } from './Equipo.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
    { path: '', component: EquipoComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EquipoComponent],
    exports: [
        RouterModule
    ]
})
export class EquipoModule { }