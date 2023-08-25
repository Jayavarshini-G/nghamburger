import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  constructor(private httpClient: HttpClient) { }

  getIssueIdService(startDate: string, endDate: string) {
    const formattedStartDate = this.formatDate(startDate);
    const formattedEndDate = this.formatDate(endDate);

    const jqlQuery = `project = "ISF Training Project" and createdDate > "${startDate}" AND updatedDate < "${endDate}"`;
    const url = `https://jira.kgisl.com/rest/api/2/search?jql=${encodeURIComponent(jqlQuery)}&fields=key`;

    console.log(startDate);
    console.log(endDate);
    console.log(jqlQuery);
    console.log(url);

    const jiraUsername = "balaji.ns";
    const jiraPassword = "Kgisl@12345";

    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${jiraUsername}:${jiraPassword}`)}`
    });

    return this.httpClient.get(url, { headers });
  }

  getWorkLogService(issueKey:string) {
    const jiraUsername = "balaji.ns";
    const jiraPassword = "Kgisl@12345";

    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${jiraUsername}:${jiraPassword}`)}`
    });
    const url = `https://jira.kgisl.com/rest/api/2/issue/${issueKey}/worklog`;
    return this.httpClient.get(url, { headers });
  }

  private formatDate(date: string): string {
    const formattedDate = new Date(date).toISOString();
    return formattedDate.substring(0, 16); // Truncate to yyyy-MM-dd HH:mm
  }
}
