import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTechComponent } from './skills-tech.component';

describe('SkillsTechComponent', () => {
  let component: SkillsTechComponent;
  let fixture: ComponentFixture<SkillsTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
