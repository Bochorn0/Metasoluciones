import { NgModule } from '@angular/core';
import { ServiciosComponent } from './Servicios.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
    { path: '', component: ServiciosComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ServiciosComponent],
    exports: [
        RouterModule
    ]
})
export class ServiciosModule { }