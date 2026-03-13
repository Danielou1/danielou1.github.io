import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  updated_at: string;
  language: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly username = 'Danielou1';
  private readonly apiUrl = `https://api.github.com/users/${this.username}/repos`;

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<GithubRepo[]> {
    return this.http.get<any[]>(`${this.apiUrl}?sort=updated&per_page=100`).pipe(
      map(repos => repos.filter(repo => !repo.fork).map(repo => ({
        name: repo.name.replace(/-/g, ' '),
        description: repo.description || 'No description available.',
        html_url: repo.html_url,
        topics: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language].filter(l => !!l),
        updated_at: repo.updated_at,
        language: repo.language
      })))
    );
  }
}
