import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SearchResultsComponent} from './search-results.component';
import {AppModule} from '../../../app.module';

describe('SearchResultsComponent', () => {
    let component: SearchResultsComponent;
    let fixture: ComponentFixture<SearchResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should be created', () => {
        expect(component).toBeTruthy();
    });
});
