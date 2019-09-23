import { NgModule } from '@angular/core';
import { ContactoComponent } from './Contacto.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
    { path: '', component: ContactoComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ContactoComponent],
    exports: [
        RouterModule
    ]
})
export class ContactoModule { }