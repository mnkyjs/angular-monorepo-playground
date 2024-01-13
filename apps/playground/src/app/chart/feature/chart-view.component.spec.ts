import {
  ComponentFixture,
  TestBed,
  DeferBlockState,
} from '@angular/core/testing';
import { ChartViewComponent } from './chart-view.component';

describe('ChartViewComponent', () => {
  let fixture: ComponentFixture<ChartViewComponent>;

  beforeEach( () => {
    fixture = TestBed.createComponent(ChartViewComponent);
  });

  it('should test and query defer blocks', async () => {
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];

    expect(fixture.nativeElement.innerHTML).toContain(
      'A secret pokemon is loading...'
    );

    await deferBlockFixture.render(DeferBlockState.Loading);
    expect(fixture.nativeElement.innerHTML).toContain(
      '<div class="px-skeleton"></div>'
    );

    await deferBlockFixture.render(DeferBlockState.Complete);
    expect(fixture.nativeElement.innerHTML).toContain('<px-chart>');
  });

  it('should test and query error defer block', async () => {
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];

    await deferBlockFixture.render(DeferBlockState.Error);
    expect(fixture.nativeElement.innerHTML).toContain(
      '<p>Something went wrong</p>'
    );
  });
});
