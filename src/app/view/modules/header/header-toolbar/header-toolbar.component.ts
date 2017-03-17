/* Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Ivan Subotic, Benjamin Geer, Tobias Schweizer.
 * This file is part of SALSAH.
 * SALSAH is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * SALSAH is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * You should have received a copy of the GNU Affero General Public
 * License along with SALSAH.  If not, see <http://www.gnu.org/licenses/>.
 * */

import {
    Component, OnInit, Input, trigger, state, transition, style, animate, HostListener,
    ElementRef
} from '@angular/core';
import {SessionService} from "../../../../model/api/session.service";
import {Router} from "@angular/router";
import {Authentication, Session} from "../../../../model/classes/session";
import {ApiServiceResult} from "../../../../model/api/api-service-result";
import {ApiServiceError} from "../../../../model/api/api-service-error";
import {DashboardComponent} from "../../../dashboard/dashboard.component";

function getDocument(): any {
    return document;
}

@Component({
    selector: 'salsah-header-toolbar',
    templateUrl: './header-toolbar.component.html',
    styleUrls: ['./header-toolbar.component.css'],
    animations: [
        trigger('addMenu',
            [
                state('false', style({display: 'none'})),
                state('true', style({display: 'block'})),
                transition('false => true', animate('500ms ease-in')),
                transition('true => false', animate('500ms ease-out'))
            ]),
        trigger('userMenu',
            [
                state('false', style({display: 'none'})),
                state('true', style({display: 'block'})),
                transition('false => true', animate('500ms ease-in')),
                transition('true => false', animate('500ms ease-out'))
            ])
    ]
})
export class HeaderToolbarComponent implements OnInit {

    userName: string = undefined;
    auth: Authentication = new Authentication();

    focusOnUserMenu: boolean = false;
    focusOnAddMenu: boolean = false;

    constructor(private _eleRef: ElementRef,
                private _sessionService: SessionService) {
    }

    // check authentication: the session (from the api) should be valid and the local storage item "auth" as well

    // if a or b is not valid or if they have different session ids, then the authentication is false!
    ngOnInit() {
        // check if the authentication is valid: there should be a local storage item called "auth"
        this.auth = this._sessionService.checkAuth();

        if (this.auth !== null) this.userName = this.auth.userProfile.userData.email;
    }

    userMenu: any = [
        {
            title: 'Projects',
            icon: 'assignment',
            route: '/projects'
        },
        {
            title: 'Collections',
            icon: 'bookmark_outline',
            route: '/collections'
        },
        {
            title: 'Edit Profile',
            icon: 'fingerprint',
            route: '/settings'
        },
        {
            title: 'Documentation',
            icon: 'chrome_reader_mode',
            route: '/documentation'
        },
        {
            title: 'Get Support',
            icon: 'headset',
            route: '/support'
        },
        {
            title: 'Log out',
            icon: 'power_settings_new',
            route: '/logout'
        }
    ];

    addMenuTitle: string = "Add some new stuff";
    addMenu: any = [
        {
            title: 'New project',
            icon: 'create_new_folder',
            route: 'new'
        },
        {
            title: 'New collection',
            icon: 'library_add',
            route: 'collection/new'
        },
        {
            title: 'New resource',
            icon: 'note_add',
            route: 'add'
        }

    ];


    @HostListener('document:click', ['$event'])
    public onClick(event) {
        if (!this._eleRef.nativeElement.contains(event.target)) {
            if(this.focusOnUserMenu) this.toggleMenu('userMenu');
            if(this.focusOnAddMenu) this.toggleMenu('addMenu');
        }
    }

    toggleMenu(name: string) {
        switch(name) {
            case 'userMenu':
                this.focusOnUserMenu = (this.focusOnUserMenu === false);
                this.focusOnAddMenu = false;
                break;
            case 'addMenu':
                this.focusOnAddMenu = (this.focusOnAddMenu === false);
                break;
        }
    }

}