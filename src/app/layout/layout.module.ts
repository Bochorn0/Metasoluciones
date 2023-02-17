import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './Menu/Menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavsearchComponent } from './header/navsearch/navsearch.component';
import { OffsidebarComponent } from './offsidebar/offsidebar.component';
import { UserblockComponent } from './sidebar/userblock/userblock.component';
import { UserblockService } from './sidebar/userblock/userblock.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        UserblockService
    ],
    declarations: [
        MenuComponent,
        FooterComponent,
        LayoutComponent,
        SidebarComponent,
        UserblockComponent,
        HeaderComponent,
        NavsearchComponent,
        OffsidebarComponent
    ],
    exports: [
        MenuComponent,
        FooterComponent,
        LayoutComponent,
        SidebarComponent,
        UserblockComponent,
        HeaderComponent,
        NavsearchComponent,
        OffsidebarComponent
    ]
})
export class LayoutModule { }
