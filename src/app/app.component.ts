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


import { Component, OnInit } from '@angular/core';
import { JsonConvert } from 'json2typescript';

@Component({
  selector: 'salsah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent implements OnInit {
  title = 'salsah works!';

    ngOnInit() {
        //
        // Json convert error handling
        //
//        JsonConvert.debugMode = true;
        // JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
        JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.ALLOW_NULL; // never allow null

    }

}
