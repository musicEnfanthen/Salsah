import { Component, OnInit, Input } from '@angular/core';
import {ReadColorValue} from "../../../model/webapi/knora/v2/read-property-item";

@Component({
  selector: 'salsah-read-color-value',
  templateUrl: './read-color-value.component.html',
  styleUrls: ['./read-color-value.component.scss']
})
export class ReadColorValueComponent implements OnInit {

  @Input() valueObject: ReadColorValue;

  constructor() { }

  ngOnInit() {
  }

}
