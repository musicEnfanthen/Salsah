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

import { basicMessageComponents } from "./basicMessageComponents"

/**
 * This module contains interfaces that represent the answers to a DELETE request of a value or a resource.
 */
export module deleteResponseFormats {

    /**
     * Represents the answer to a value delete request.
     *
     * HTTP DELETE to http://host/v1/values/valueIRI
     *
     */
    export interface deleteValueResponse extends basicMessageComponents.basicResponse {

        /**
         * The IRI of the value that has been marked as deleted.
         */
        id: basicMessageComponents.KnoraIRI;

    }

    /**
     * Represents the answer to a resource delete request.
     *
     * HTTP DELETE to http://host/v1/resources/valueIRI
     */
    export interface deleteResourceResponse extends basicMessageComponents.basicResponse {

        /**
         * The IRI of the resource that has been marked as deleted.
         */
        id: basicMessageComponents.KnoraIRI;

    }


}
