import { Component } from '@angular/core';
import { ScorecardService } from './scorecard.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent {
  scores:any = [];
  constructor(private scorecardService:ScorecardService){}

  ngOnInit() {    
      this.getScores();    
  }

  getScores() {
    this.scorecardService.getScoresService().subscribe((data) => {
      console.log(data);
      this.scores = data;
    });
  }

}
