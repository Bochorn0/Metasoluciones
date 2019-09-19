import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

import { MenuService } from '../../core/menu/menu.service';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: 'App-Content',
    templateUrl: './Content.component.html',
    styleUrls: ['./Content.component.scss']
})
export class ContentComponent implements OnInit {

    menuItems: Array<any>;
    router: Router;
    sbclickEvent = 'click.sidebar-toggle';
    $doc: any = null;
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);    
    constructor(public menu: MenuService, public settings: SettingsService, public injector: Injector) {

    }
    ngOnInit() {
    }
}
