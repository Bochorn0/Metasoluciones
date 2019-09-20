import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/Home.component';
import { ContentComponent } from '../../layout/Content/Content.component';
import { FooterComponent } from '../../layout/Footer/Footer.component';
import { MenuComponent } from '../../layout/Menu/Menu.component';
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
    declarations: [HomeComponent,MenuComponent,ContentComponent,FooterComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }