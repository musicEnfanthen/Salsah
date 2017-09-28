import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
//
// import the main app components
//
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
//
// import the material design modules
//
import {AppMaterialModule} from './app-material-module';
import 'hammerjs';
//
// import other third party modules
import {DndModule} from 'ng2-dnd';
import {ApiService} from './model/services/api.service';
import {ListsService} from './model/services/lists.service';
import {AuthenticationService} from './model/services/authentication.service';
import {ProjectsService} from './model/services/projects.service';
import {PropertiesService} from './model/services/properties.service';
import {ResourceService} from './model/services/resource.service';
import {ResourceTypesService} from './model/services/resource-types.service';
import {OntologyService} from './model/services/ontology.service';
import {OntologyCacheService} from './model/services/ontologycache.service';
import {SearchService} from './model/services/search.service';

import {IncomingService} from "./model/services/incoming.service";

import {UserService} from './model/services/user.service';
// just to get the basic ontology form the json file
import {BasicOntologyService} from './model/services/basic-ontology.service';
// and a list of status messages
import {StatusMsgServiceService} from './model/services/status-msg-service.service';
//
// import directives, pipes etc.
//
import {ForbiddenNameDirective} from './view/modules/other/forbidden-name.directive';
import {ImageDirective} from './view/modules/other/image.directive';
import {KeyPipe} from './view/modules/other/key.pipe';
import {OverlayDirective} from './view/modules/other/overlay.directive';
import {ReversePipe} from './view/modules/other/reverse.pipe';
import {SortByPipe} from './view/modules/other/sort-by.pipe';
//
// import all app components
//
import {HeaderComponent} from './view/modules/framework/main-framework/header/header.component';
import {HeaderToolbarComponent} from './view/modules/framework/main-framework/header/header-toolbar/header-toolbar.component';
import {HeaderProjectsComponent} from './view/modules/framework/main-framework/header/header-projects/header-projects.component';
import {FooterComponent} from './view/modules/framework/main-framework/footer/footer.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {LoginComponent} from './view/login/login.component';
import {UserComponent} from './view/dashboard/user/user.component';
import {UserProfileComponent} from './view/dashboard/user/user-profile/user-profile.component';
import {UserSettingsComponent} from './view/dashboard/user/user-settings/user-settings.component';
import {ProjectComponent} from './view/dashboard/project/project.component';
import {ProjectProfileComponent} from './view/dashboard/project/project-profile/project-profile.component';
import {ProjectSettingsComponent} from './view/dashboard/project/project-settings/project-settings.component';
import {ProjectTeamComponent} from './view/dashboard/project/project-team/project-team.component';
import {ProjectResourcesComponent} from './view/dashboard/project/project-resources/project-resources.component';
import {SearchComponent} from './view/modules/search/search.component';
import {SimpleSearchComponent} from './view/modules/search/simple-search/simple-search.component';
import {ExtendedSearchComponent} from './view/modules/search/extended-search/extended-search.component';
import {ProjectsListComponent} from './view/modules/listing/projects-list/projects-list.component';
import {ResourcesListComponent} from './view/modules/listing/resources-list/resources-list.component';
import {ResourceGridListComponent} from './view/modules/listing/resource-grid-list/resource-grid-list.component';
import {ProjectFormComponent} from './view/modules/form/project-form/project-form.component';
import {ResourceClassFormComponent} from './view/modules/form/resource-class-form/resource-class-form.component';
import {ResourceFormComponent} from './view/modules/form/resource-form/resource-form.component';
import {DocumentationComponent} from './view/documentation/documentation.component';
import {UserProjectsComponent} from './view/dashboard/user/user-projects/user-projects.component';
import {UserCollectionsComponent} from './view/dashboard/user/user-collections/user-collections.component';
import {ProjectAdvancedComponent} from './view/dashboard/project/project-advanced/project-advanced.component';
import {ProgressIndicatorComponent} from './view/modules/other/progress-indicator/progress-indicator.component';
import {ProgressStepperComponent} from './view/modules/other/progress-stepper/progress-stepper.component';
import {AdvancedResourceClassComponent} from './view/modules/form/advanced-resource-class/advanced-resource-class.component';
import {UserFormComponent} from './view/modules/form/user-form/user-form.component';
import {DevelopmentComponent} from './view/test/development/development.component';
import {MessageComponent} from './view/modules/message/message.component';
import {NewResourceClassComponent} from './view/modules/form/new-resource-class/new-resource-class.component';
import {EditResourceClassComponent} from './view/modules/form/edit-resource-class/edit-resource-class.component';
import {SystemComponent} from './view/dashboard/system/system.component';
import {SystemUsersComponent} from './view/dashboard/system/system-users/system-users.component';
import {UsersListComponent} from './view/modules/listing/users-list/users-list.component';
import {FrameworkForListingsComponent} from './view/modules/framework/framework-for-listings/framework-for-listings.component';
import {UserObjectComponent} from './view/modules/object/user-object/user-object.component';
import {MessageDialogComponent} from './view/modules/dialog/message-dialog/message-dialog.component';

import {FormDialogComponent} from './view/modules/dialog/form-dialog/form-dialog.component';
import {ResourceTypesListComponent} from './view/modules/listing/resource-types-list/resource-types-list.component';
import {CollectionsListComponent} from './view/modules/listing/collections-list/collections-list.component';
import {SearchResultsComponent} from './view/search/search-results/search-results.component';
import {ResourceObjectComponent} from './view/modules/object/resource-object/resource-object.component';
import {FileUploaderComponent} from './view/modules/form/file-uploader/file-uploader.component';
import {DndDirective} from './view/modules/other/dnd.directive';
import {ResizeGridDirective} from './view/modules/other/resize-grid.directive';
import {FormCreateComponent} from './view/test/development/form-create/form-create.component';
import {FocusDirective} from './view/modules/other/focus.directive';
import {ConfirmDialogComponent} from './view/modules/dialog/confirm-dialog/confirm-dialog.component';


import {MathJaxDirective} from './view/modules/other/mathjax.directive';
import {ReadTextValueAsHtmlComponent} from './view/properties/read-text-value-as-html/read-text-value-as-html.component';
import {ReadDateValueComponent} from './view/properties/read-date-value/read-date-value.component';
import {ReadLinkValueComponent} from './view/properties/read-link-value/read-link-value.component';
import {ReadTextValueAsStringComponent} from './view/properties/read-text-value-as-string/read-text-value-as-string.component';
import {ReadTextValueAsXmlComponent} from './view/properties/read-text-value-as-xml/read-text-value-as-xml.component';
import {ReadIntegerValueComponent} from './view/properties/read-integer-value/read-integer-value.component';
import {ReadDecimalValueComponent} from './view/properties/read-decimal-value/read-decimal-value.component';
import {StillImageOSDViewerComponent} from './view/properties/still-image-osdviewer/still-image-osdviewer.component';
import {ReadGeomValueComponent} from './view/properties/read-geom-value/read-geom-value.component';
import {ReadColorValueComponent} from './view/properties/read-color-value/read-color-value.component';
import {SystemProjectsComponent} from "./view/dashboard/system/system-projects/system-projects.component";
import {SystemOntologiesComponent} from "./view/dashboard/system/system-ontologies/system-ontologies.component";
//
// import all needed services
//
// just to get the basic ontology form the json file
// just to get the basic ontology form the json file
//
// import all app components
//

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        UserComponent,
        LoginComponent,
        ProjectComponent,
        SearchComponent,
        SimpleSearchComponent,
        ExtendedSearchComponent,
        HeaderToolbarComponent,
        HeaderProjectsComponent,
        DashboardComponent,
        ImageDirective,
        UserSettingsComponent,
        ProjectSettingsComponent,
        UserProfileComponent,
        ProjectProfileComponent,
        ProjectsListComponent,
        OverlayDirective,
        ResourcesListComponent,
        ResourceGridListComponent,
        ProjectTeamComponent,
        ProjectResourcesComponent,
        ProjectFormComponent,
        UserFormComponent,
        ResourceClassFormComponent,
        ResourceFormComponent,
        DocumentationComponent,
        UserProjectsComponent,
        UserCollectionsComponent,
        ProjectAdvancedComponent,
        ReversePipe,
        KeyPipe,
        ProgressIndicatorComponent,
        ProgressStepperComponent,
        AdvancedResourceClassComponent,
        MathJaxDirective,
        DevelopmentComponent,
        MessageComponent,
        ReadTextValueAsHtmlComponent,
        ReadDateValueComponent,
        ReadLinkValueComponent,
        ReadTextValueAsStringComponent,
        ReadTextValueAsXmlComponent,
        ReadIntegerValueComponent,
        ReadDecimalValueComponent,
        StillImageOSDViewerComponent,
        NewResourceClassComponent,
        EditResourceClassComponent,
        SortByPipe,
        SystemComponent,
        SystemUsersComponent,
        SystemProjectsComponent,
        SystemOntologiesComponent,
        ReadGeomValueComponent,
        ReadColorValueComponent,
        UsersListComponent,
        FrameworkForListingsComponent,
        UserObjectComponent,
        MessageDialogComponent,
        ForbiddenNameDirective,
        FormDialogComponent,
        ResourceTypesListComponent,
        CollectionsListComponent,
        SearchResultsComponent,
        ResourceObjectComponent,
        FileUploaderComponent,
        DndDirective,
        ResizeGridDirective,
        FormCreateComponent,
        FocusDirective,
        ConfirmDialogComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AppMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        DndModule.forRoot()
    ],
    // we need the entryComponents for every component inside of a md-dialog module
    entryComponents: [
        ConfirmDialogComponent,
        FormDialogComponent,
        MessageDialogComponent,
        ResourceClassFormComponent // deprecated!!
    ],
    providers: [
        ApiService,
        ProjectsService,
        PropertiesService,
        ResourceService,
        ResourceTypesService,
        SearchService,
        IncomingService,
        BasicOntologyService,
        UserService,
        OntologyService,
        OntologyCacheService,
        ListsService,
        StatusMsgServiceService,
        AuthenticationService,
        {provide: APP_BASE_HREF, useValue: '/'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
