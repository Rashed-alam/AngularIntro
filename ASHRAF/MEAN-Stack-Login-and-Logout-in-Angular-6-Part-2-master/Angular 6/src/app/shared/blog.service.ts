import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Blog } from "../shared/blog.model";
import { environment } from "src/environments/environment";
import { take, map } from "rxjs/operators";
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  private readonly API = `${environment.apiBaseUrl}/articles`;
  private articles: Blog[] = [];

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Blog[]>(this.API).pipe();
  }

  loadById(id) {
    return this.http.get<Blog>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(article: Blog) {
    return this.http.post(this.API, article).pipe(take(1));
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  private update(article) {
    return this.http.put(`${this.API}/${article.id}`, article).pipe(take(1));
  }

  save(article) {
  
    if (article.id) {
      return this.update(article);
    } else {
      article.createdAt = new Date();
      return this.create(article);
    }
  }
}
