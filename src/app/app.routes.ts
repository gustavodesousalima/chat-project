import { Routes, ActivatedRoute } from '@angular/router';
import { ChatPageComponent } from './module/chat-page/chat-page.component';

export const routes: Routes = [
    { path: 'chat-page/:conversationid/:userhistory', component: ChatPageComponent}
];
