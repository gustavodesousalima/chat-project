import { Component } from '@angular/core';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  imports: [SideBarComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent {
  conversationid!: number;
  userhistory!: boolean;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.conversationid = params['conversationid'];
      this.userhistory = params['userhistory'];
    });
  }
}
