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

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from "./api.service";
import {environment} from '../../../environments/environment';


@Injectable()
export class BasicOntologyService extends ApiService {

    /**
     * returns our list of a basic ontology
     *
     * @returns {Observable<any>}
     */
    // getBasicOntology(): Observable<any> {
    //     let url = environment.url;
    //     return this.httpGet(url + '/data/base-data/basic-ontology.json', {withCredentials: false});
    // }
    getBasicOntology(): Observable<any> {
        return this.httpGetBasicOnto('/ontology/knora-api/v2');
    }

}
