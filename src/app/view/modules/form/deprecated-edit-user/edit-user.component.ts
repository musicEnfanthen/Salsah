/* Copyright © 2016 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Ivan Subotic, Benjamin Geer, Tobias Schweizer, Sepideh Alassi
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

import {Component, Input, OnInit} from '@angular/core';
import {ApiServiceResult} from '../../../../model/services/api-service-result';
import {ApiServiceError} from '../../../../model/services/api-service-error';
import {UserService} from '../../../../model/services/user.service';
import {User, UserProfile} from '../../../../model/webapi/knora/';

@Component({
    selector: 'salsah-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

    @Input() iri: string;
    @Input() index: number = null;

    userProfile: UserProfile;
    errorMessage: any = undefined;
    selectedRow: number;

    constructor(private _userService: UserService) {
    }

    ngOnInit() {
        this._userService.getUserByIri(this.iri)
            .subscribe(
                (result: ApiServiceResult) => {
                    this.userProfile = result.getBody(User).userProfile;
                    console.log(this.userProfile);
                    this.selectedRow = this.index;
                },
                (error: ApiServiceError) => {
                    this.errorMessage = <any>error;
                }
            );
    }

}