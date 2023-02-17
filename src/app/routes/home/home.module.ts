import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './../../layout/Content/Content.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent,ContentComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }