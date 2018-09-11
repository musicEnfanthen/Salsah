import { TestBed, inject } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { AppRoutingModule } from '../../app-routing.module';

import { ResourceTypesService } from './resource-types.service';
import { ApiService } from '@knora/core';

describe('ResourceTypesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                AppRoutingModule
            ],
            providers: [
                ApiService,
                ResourceTypesService
            ]
        });
    });

    it('should be created', inject([ResourceTypesService], (service: ResourceTypesService) => {
        expect(service).toBeTruthy();
    }));
});
