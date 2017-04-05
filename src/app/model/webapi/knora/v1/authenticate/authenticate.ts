/* Copyright © 2017 Lukas Rosenthaler, André Kilchenmann, Andreas Aeschlimann,
 * Sofia Georgakopoulou, Ivan Subotic, Benjamin Geer, Tobias Schweizer, Sepideh Alassi.
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

import {JsonObject, JsonProperty} from "json2typescript";
import {UserProfile} from "../users/user-profile";
import {UserData} from "../users/user-data";

@JsonObject
export class Authenticate {

    @JsonProperty('status', Number)
    public status: Number = undefined;

    @JsonProperty('message', String)
    public message: string = undefined;

    @JsonProperty('sid', String)
    public sid: string = undefined;

    @JsonProperty('userProfile', UserProfile)
    public userProfile: UserProfile = undefined;

    @JsonProperty('userData', UserData, true)
    public userData: UserData = undefined;

}
