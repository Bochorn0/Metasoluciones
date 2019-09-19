import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: 'App-Footer',
    templateUrl: './Footer.component.html',
    styleUrls: ['./Footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(public settings: SettingsService) { }

    ngOnInit() {

    }

}
