import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@npx-angular-ngrx-nest/api-interface';

@Component({
  selector: 'npx-angular-ngrx-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
