import { Component, OnInit } from '@angular/core';
import { Position} from '../appData/position';
import { PositionService} from '../appData/position.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-positions',
  templateUrl: './position-component.component.html',
  styleUrls: ['./position-component.component.css']
})
export class PositionComponent implements OnInit {
  positions: Position[];
  getPositionsSub: any;
  loadingError = false;

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.getPositionsSub = this.positionService
      .getPositions()
      .subscribe(
        employees => (this.positions = employees),
        (error) => (this.loadingError = true)
      );
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.getPositionsSub !== undefined) {
      this.getPositionsSub.unsubscribe();
    }
  }
}
