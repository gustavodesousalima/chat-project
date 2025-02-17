import { Component } from '@angular/core';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-chat-page',
  imports: [SideBarComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {
  conversationid!: number;
  userhistory!: boolean;
  response!: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      this.conversationid = params['conversationid'];
      this.userhistory = params['userhistory'];
    });

    //requisição get para api e guardar a resposta em uma variável

    //requisição post para api
    const req = new HttpRequest('GET', 'https://api.example.com', {
      params: {
        conversationid: this.conversationid,
        userhistory: this.userhistory
      }
    });
    this.http.request(req).subscribe(response => {
      this.response = response;
    });
  }
}
