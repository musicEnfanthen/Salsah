import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/framework/header/header.component';
import { OntologyComponent } from './components/admin/ontology/ontology.component';





@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        OntologyComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
