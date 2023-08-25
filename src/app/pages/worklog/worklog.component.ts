import { Component } from '@angular/core';
import { WorklogService } from './worklog.service';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.css']
})
export class WorklogComponent {
  issueids: any = [];
  worklogs: any = [];

  constructor(private worklogService: WorklogService) { }

  ngOnInit() {
    // this.getIssues();
    this.getWorklogs();
  }

  getIssues() {
    const startDate: string = "2023-08-01";
    const endDate: string = "2023-08-31";

    this.worklogService.getIssueIdService(startDate, endDate).subscribe((data) => {
      console.log(data);
      this.issueids = data;
      // this.getWorklogs();
    });
  }

  getWorklogs() {

    const issueKeys = [
      "ITP_11135-234",
      "ITP_11135-233",
      "ITP_11135-232",
      "ITP_11135-231",
      "ITP_11135-230",
      "ITP_11135-229",
      "ITP_11135-228",
      "ITP_11135-227",
      "ITP_11135-226"
      // ... (add more issue keys)
    ];

    const startDate: string = "2023-08-01";
    const endDate: string = "2023-08-31";

    issueKeys.map(id=>{});
    this.worklogService.getWorkLogService("ITP_11135-229").subscribe((data) => {
      console.log(data);
      this.worklogs = data;

    });
    
  }

}
