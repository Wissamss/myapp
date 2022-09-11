import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { DashBoardPage } from './dashboard.page';

describe('DashBoardPage', () => {
  let component: DashBoardPage;
  let fixture: ComponentFixture<DashBoardPage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DashBoardPage);
    router=TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to trip page after see more', () => {
    spyOn(router,'navigate');
    component.trip();
    expect(router.navigate).toHaveBeenCalledWith(['trip']);
  });
});
