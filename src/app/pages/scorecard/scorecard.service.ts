import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScorecardService {

  private url = 'https://mtalentx.kgisl.com/talentx/web/api/get-score-card';

  constructor(private httpClient: HttpClient) { }

  getScoresService() {
    // const headers = { 'content-type': 'application/json' };
    const securityToken = "b4a2591f4dec919fa3954523bf35a8c9";
    const empEmailOrCode = "madhumitha.k@kgisl.com";

    const formData = new FormData();
    formData.append("security_token", securityToken);
    formData.append("emp_email_or_code", empEmailOrCode);

    return this.httpClient.post(this.url, formData);
  }
}