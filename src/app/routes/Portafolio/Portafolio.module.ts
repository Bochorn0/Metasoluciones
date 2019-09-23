import { NgModule } from '@angular/core';
import { PortafolioComponent } from './Portafolio.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
    { path: '', component: PortafolioComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PortafolioComponent],
    exports: [
        RouterModule
    ]
})
export class PortafolioModule { }