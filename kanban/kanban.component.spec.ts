import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { KanbanComponent } from './kanban.component';

describe('KanbanComponent', () => {
  let component: KanbanComponent;
  let fixture: ComponentFixture<KanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
      ],
      declarations: [ KanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'kanban'`, () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(KanbanComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('kanban');
  });

  it('should render title in a h1 tag', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(KanbanComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to kanban!');
  });
});
