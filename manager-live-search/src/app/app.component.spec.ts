import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerService } from './app.service';
import { ManagerServiceStub } from './app-stubs.service.mock';
import { InputSearchComponent } from './input-search/input-search/input-search.component';
import { By } from '@angular/platform-browser';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let AppFixture: ComponentFixture<AppComponent>;
  let inputComponent: InputSearchComponent;
  let InputSearchFixture: ComponentFixture<InputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AppComponent,InputSearchComponent],
      providers: [{ provide: ManagerService, useClass: ManagerServiceStub },InputSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    AppFixture = TestBed.createComponent(AppComponent);
    component = AppFixture.componentInstance;
    AppFixture.detectChanges();

    InputSearchFixture = TestBed.createComponent(InputSearchComponent);
    inputComponent = InputSearchFixture.componentInstance;
    InputSearchFixture.detectChanges();
  });

  it('should create the app', () => {
    const AppFixture = TestBed.createComponent(AppComponent);
    const app = AppFixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'manager-live-search'`, () => {
    const AppFixture = TestBed.createComponent(AppComponent);
    const app = AppFixture.componentInstance;
    expect(app.title).toEqual('manager-live-search');
  });

  it('should render title', () => {
    const AppFixture = TestBed.createComponent(AppComponent);
    AppFixture.detectChanges();
    const compiled = AppFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('manager-live-search app is running!');
  });

  fit('populated manager list in the dropdown when a user clicked the input field ', () => {
    const ele = InputSearchFixture.debugElement.nativeElement.querySelector('#managerInput');
    ele.click();
    expect(component.allManagers.data.length).toBeGreaterThan(0);
  });

  fit('populated input field when a manager name is selected in the dropdown list ', () => {
    const manager_element = AppFixture.debugElement.nativeElement.querySelector('#managerInput');
    manager_element.click();
    AppFixture.detectChanges();
    let select = AppFixture.debugElement.nativeElement.querySelector('#managerSelect');
    select.value =   select.options[0].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    AppFixture.detectChanges();
    const manager_ele = AppFixture.debugElement.nativeElement.querySelector('#managerInput');
    expect(manager_ele.value).toBe('Harriet McKinney');
  });
});
