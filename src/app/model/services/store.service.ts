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
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RdfDataObject, ResetTriplestoreContentResponse} from '../webapi/knora/admin';
import {environment} from '../../../environments/environment';


@Injectable()
export class StoreService {

    constructor(private http: HttpClient) {}

    /**
     * resets the content of the triplestore
     *
     * @param rdfDataObjects
     * @returns {Observable<string>}
     */
    resetTriplestoreContent(rdfDataObjects: RdfDataObject[]): Observable<string> {

        return this.http.post<ResetTriplestoreContentResponse>(environment.api + '/admin/store/ResetTriplestoreContent', rdfDataObjects).map(
            (data) => {
                const result: ResetTriplestoreContentResponse = data;
                // console.log('StoreService - resetTriplestoreContent: ', result);
                return result.message;
            },
            (error: HttpErrorResponse) => {
                if (error.error instanceof Error) {
                    console.log('StoreService - resetTriplestoreContent - Client-side error occurred.', error);
                } else {
                    console.log('StoreService - resetTriplestoreContent - Server-side error occurred.', error);
                }
                throw error;
            }
        );

    }

}
